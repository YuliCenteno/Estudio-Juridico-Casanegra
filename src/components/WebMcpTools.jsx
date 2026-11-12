import { useEffect } from 'react';

const businessContact = {
  name: 'Estudio Jurídico Casanegra & Asociados',
  address: 'José Gigena 2058, Córdoba, Argentina',
  telephone: '+54 351 650 6222',
  alternateTelephone: '+54 351 201 6540',
  email: 'secretaria@estudiocasanegra.com',
};

function WebMcpTools() {
  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext || typeof modelContext.registerTool !== 'function') return;

    modelContext.registerTool({
      name: 'get_business_contact',
      description: 'Returns the law firm’s publicly listed contact information.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
      execute: () => businessContact,
    });
  }, []);

  return null;
}

export default WebMcpTools;
