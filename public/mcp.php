<?php
declare(strict_types=1);

const MCP_PROTOCOL_VERSION = '2025-11-25';
const MAX_MCP_REQUEST_BYTES = 1048576;

function sendJson(int $statusCode, array $payload): void
{
    $body = json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($body === false) {
        http_response_code(500);
        header('Content-Type: text/plain; charset=utf-8');
        exit('Unable to encode MCP response');
    }

    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    header('Content-Length: ' . strlen($body));
    echo $body;
    exit;
}

function acceptsJson(string $acceptHeader): bool
{
    foreach (explode(',', $acceptHeader) as $mediaRange) {
        $parts = explode(';', trim($mediaRange));
        if (strtolower(trim($parts[0])) !== 'application/json') {
            continue;
        }

        foreach (array_slice($parts, 1) as $parameter) {
            if (preg_match('/^\s*q\s*=\s*([0-9.]+)\s*$/i', trim($parameter), $match) === 1) {
                if ((float) $match[1] <= 0) {
                    continue 2;
                }
            }
        }

        return true;
    }

    return false;
}

function sendRpcError($id, int $code, string $message): void
{
    sendJson(200, [
        'jsonrpc' => '2.0',
        'id' => $id,
        'error' => [
            'code' => $code,
            'message' => $message,
        ],
    ]);
}

header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept, MCP-Protocol-Version');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST, OPTIONS');
    sendJson(405, ['error' => 'Method not allowed']);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (preg_match('/^application\/json(?:\s*;|$)/i', $contentType) !== 1) {
    sendJson(415, ['error' => 'Content-Type must be application/json']);
}

$acceptHeader = $_SERVER['HTTP_ACCEPT'] ?? '';
if (!acceptsJson($acceptHeader)) {
    sendJson(406, ['error' => 'Accept must include application/json']);
}

$body = file_get_contents('php://input', false, null, 0, MAX_MCP_REQUEST_BYTES + 1);
if ($body === false) {
    sendJson(400, ['error' => 'Unable to read request body']);
}
if (strlen($body) > MAX_MCP_REQUEST_BYTES) {
    sendJson(413, ['error' => 'Request body is too large']);
}

$message = json_decode($body, true);
if (!is_array($message) || ($message['jsonrpc'] ?? null) !== '2.0' || !is_string($message['method'] ?? null)) {
    $requestId = is_array($message) ? ($message['id'] ?? null) : null;
    sendJson(400, [
        'jsonrpc' => '2.0',
        'id' => $requestId,
        'error' => ['code' => -32600, 'message' => 'Invalid Request'],
    ]);
}

$requestId = $message['id'] ?? null;
$method = $message['method'];
$params = is_array($message['params'] ?? null) ? $message['params'] : [];

if (str_starts_with($method, 'notifications/')) {
    http_response_code(202);
    exit;
}

if (!array_key_exists('id', $message)) {
    sendRpcError(null, -32600, 'Requests must include an id');
}

if ($method === 'initialize') {
    if (($params['protocolVersion'] ?? null) !== MCP_PROTOCOL_VERSION) {
        sendRpcError($requestId, -32602, 'Unsupported protocol version');
    }

    header('MCP-Protocol-Version: ' . MCP_PROTOCOL_VERSION);
    sendJson(200, [
        'jsonrpc' => '2.0',
        'id' => $requestId,
        'result' => [
            'protocolVersion' => MCP_PROTOCOL_VERSION,
            'capabilities' => ['tools' => ['listChanged' => false]],
            'serverInfo' => [
                'name' => 'estudiocasanegra.com',
                'title' => 'Estudio Jurídico Casanegra & Asociados',
                'version' => '1.0.0',
            ],
        ],
    ]);
}

if (($_SERVER['HTTP_MCP_PROTOCOL_VERSION'] ?? '') !== MCP_PROTOCOL_VERSION) {
    sendJson(400, [
        'jsonrpc' => '2.0',
        'id' => $requestId,
        'error' => [
            'code' => -32600,
            'message' => 'MCP-Protocol-Version must be ' . MCP_PROTOCOL_VERSION,
        ],
    ]);
}

header('MCP-Protocol-Version: ' . MCP_PROTOCOL_VERSION);

if ($method === 'tools/list') {
    sendJson(200, [
        'jsonrpc' => '2.0',
        'id' => $requestId,
        'result' => [
            'tools' => [[
                'name' => 'get_business_contact',
                'description' => 'Returns the law firm’s publicly listed contact information.',
                'inputSchema' => [
                    'type' => 'object',
                    'properties' => (object) [],
                    'additionalProperties' => false,
                ],
            ]],
        ],
    ]);
}

if ($method === 'tools/call') {
    if (($params['name'] ?? null) !== 'get_business_contact') {
        sendRpcError($requestId, -32602, 'Unknown tool');
    }

    $businessContact = [
        'name' => 'Estudio Jurídico Casanegra & Asociados',
        'address' => 'José Gigena 2058, Córdoba, Argentina',
        'telephone' => '+54 351 650 6222',
        'alternateTelephone' => '+54 351 201 6540',
        'email' => 'secretaria@estudiocasanegra.com',
    ];

    sendJson(200, [
        'jsonrpc' => '2.0',
        'id' => $requestId,
        'result' => [
            'content' => [[
                'type' => 'text',
                'text' => json_encode($businessContact, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
            ]],
            'structuredContent' => $businessContact,
        ],
    ]);
}

sendRpcError($requestId, -32601, 'Method not found');
