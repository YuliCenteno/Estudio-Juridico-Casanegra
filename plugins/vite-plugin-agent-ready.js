import { Buffer } from 'node:buffer';
import { readFileSync } from 'node:fs';

const SITE_URL = 'https://estudiocasanegra.com';
const MCP_PROTOCOL_VERSION = '2025-11-25';
const MAX_MCP_REQUEST_BYTES = 1024 * 1024;
const businessContact = {
	name: 'Estudio Jurídico Casanegra & Asociados',
	address: 'José Gigena 2058, Córdoba, Argentina',
	telephone: '+54 351 650 6222',
	alternateTelephone: '+54 351 201 6540',
	email: 'secretaria@estudiocasanegra.com',
};
const markdown = readFileSync(new URL('../public/index.md', import.meta.url), 'utf8');
const linkHeader = [
	`<${SITE_URL}/index.md>; rel="alternate"; type="text/markdown"`,
	`<${SITE_URL}/llms.txt>; rel="describedby"; type="text/plain"`,
	`<${SITE_URL}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,
].join(', ');

function acceptsMarkdown(acceptHeader = '') {
	const markdownType = acceptHeader
		.split(',')
		.map((value) => value.trim().split(';'))
		.find(([mediaType]) => mediaType.trim() === 'text/markdown');

	if (!markdownType) return false;

	const quality = markdownType
		.slice(1)
		.map((parameter) => parameter.trim().match(/^q=(.+)$/i)?.[1])
		.find(Boolean);

	return quality === undefined || Number(quality) > 0;
}

function sendJson(response, statusCode, payload) {
	const body = JSON.stringify(payload);
	response.statusCode = statusCode;
	response.setHeader('Content-Type', 'application/json; charset=utf-8');
	response.setHeader('Content-Length', Buffer.byteLength(body));
	response.end(body);
}

function handleMcpRequest(request, response) {
	response.setHeader('Cache-Control', 'no-store');
	if (request.method === 'OPTIONS') {
		response.statusCode = 204;
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
		response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, MCP-Protocol-Version');
		response.end();
		return;
	}

	response.setHeader('Access-Control-Allow-Origin', '*');
	if (request.method !== 'POST') {
		response.setHeader('Allow', 'POST, OPTIONS');
		sendJson(response, 405, { error: 'Method not allowed' });
		return;
	}

	if (!request.headers['content-type']?.toLowerCase().includes('application/json')) {
		sendJson(response, 415, { error: 'Content-Type must be application/json' });
		return;
	}

	const accept = (request.headers.accept || '').toLowerCase();
	if (!accept.includes('application/json')) {
		sendJson(response, 406, { error: 'Accept must include application/json' });
		return;
	}

	let body = '';
	let tooLarge = false;
	request.setEncoding('utf8');
	request.on('data', (chunk) => {
		if (tooLarge) return;
		body += chunk;
		if (Buffer.byteLength(body) > MAX_MCP_REQUEST_BYTES) {
			tooLarge = true;
		}
	});
	request.on('end', () => {
		if (tooLarge) {
			sendJson(response, 413, { error: 'Request body is too large' });
			return;
		}

		let message;
		try {
			message = JSON.parse(body);
		} catch {
			sendJson(response, 400, { error: 'Request body must be valid JSON' });
			return;
		}

		if (!message || message.jsonrpc !== '2.0' || typeof message.method !== 'string') {
			sendJson(response, 400, {
				jsonrpc: '2.0',
				id: message?.id ?? null,
				error: { code: -32600, message: 'Invalid Request' },
			});
			return;
		}

		if (
			message.method === 'initialize' &&
			message.params?.protocolVersion !== MCP_PROTOCOL_VERSION
		) {
			sendJson(response, 200, {
				jsonrpc: '2.0',
				id: message.id ?? null,
				error: {
					code: -32602,
					message: `Supported protocol version: ${MCP_PROTOCOL_VERSION}`,
				},
			});
			return;
		}

		if (message.method.startsWith('notifications/')) {
			response.statusCode = 202;
			response.end();
			return;
		}

		if (
			message.method !== 'initialize' &&
			request.headers['mcp-protocol-version'] !== MCP_PROTOCOL_VERSION
		) {
			sendJson(response, 400, {
				jsonrpc: '2.0',
				id: message.id ?? null,
				error: {
					code: -32600,
					message: `MCP-Protocol-Version must be ${MCP_PROTOCOL_VERSION}`,
				},
			});
			return;
		}

		response.setHeader('MCP-Protocol-Version', MCP_PROTOCOL_VERSION);
		let result;
		if (message.method === 'initialize') {
			result = {
				protocolVersion: MCP_PROTOCOL_VERSION,
				capabilities: { tools: { listChanged: false } },
				serverInfo: {
					name: 'estudiocasanegra.com',
					title: 'Estudio Jurídico Casanegra & Asociados',
					version: '1.0.0',
				},
			};
		} else if (message.method === 'tools/list') {
			result = {
				tools: [{
					name: 'get_business_contact',
					description: 'Returns the law firm’s publicly listed contact information.',
					inputSchema: {
						type: 'object',
						properties: {},
						additionalProperties: false,
					},
				}],
			};
		} else if (message.method === 'tools/call' && message.params?.name === 'get_business_contact') {
			result = {
				content: [{ type: 'text', text: JSON.stringify(businessContact, null, 2) }],
				structuredContent: businessContact,
			};
		} else {
			sendJson(response, 200, {
				jsonrpc: '2.0',
				id: message.id ?? null,
				error: {
					code: message.method === 'tools/call' ? -32602 : -32601,
					message: message.method === 'tools/call' ? 'Unknown tool' : 'Method not found',
				},
			});
			return;
		}

		sendJson(response, 200, {
			jsonrpc: '2.0',
			id: message.id ?? null,
			result,
		});
	});
}

function addAgentReadyMiddleware(server) {
	server.middlewares.use((request, response, next) => {
		if (!request.url) return next();

		const pathname = new URL(request.url, 'http://localhost').pathname;
		if (pathname === '/mcp') {
			handleMcpRequest(request, response);
			return;
		}

		if (pathname === '/.well-known/mcp/server-card.json') {
			response.setHeader('Access-Control-Allow-Origin', '*');
			return next();
		}

		if (pathname !== '/') return next();

		response.setHeader('Link', linkHeader);
		response.setHeader('Vary', 'Accept');

		if (!acceptsMarkdown(request.headers.accept)) return next();

		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/markdown; charset=utf-8');
		response.setHeader('Content-Length', Buffer.byteLength(markdown));
		response.end(markdown);
	});
}

export default function agentReadyPlugin() {
	return {
		name: 'agent-ready-resources',
		configureServer: addAgentReadyMiddleware,
		configurePreviewServer: addAgentReadyMiddleware,
	};
}
