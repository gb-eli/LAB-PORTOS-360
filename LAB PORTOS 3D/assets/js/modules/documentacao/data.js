export const documents = [
  { id: 'nfe', name: 'NF-e / DANFE', group: 'Fiscal', role: 'Representa a operação fiscal de circulação de mercadorias; o DANFE é a representação auxiliar da NF-e.', fields: ['Emitente', 'Destinatário', 'Chave de acesso', 'Itens', 'Valores'], color: 'Fiscal' },
  { id: 'cte', name: 'CT-e / DACTE', group: 'Transporte', role: 'Documento fiscal eletrônico ligado à prestação de serviço de transporte; o DACTE é sua representação auxiliar.', fields: ['Remetente', 'Destinatário', 'Tomador', 'Modal', 'Valor da prestação'], color: 'Transporte' },
  { id: 'mdfe', name: 'MDF-e', group: 'Transporte', role: 'Consolida informações de documentos fiscais e da operação de transporte em um manifesto eletrônico.', fields: ['Veículo', 'Condutor', 'UF de percurso', 'Documentos vinculados', 'Encerramento'], color: 'Transporte' },
  { id: 'bl', name: 'Bill of Lading (B/L)', group: 'Marítimo', role: 'Conhecimento de embarque marítimo usado para registrar dados do transporte da carga por navio.', fields: ['Shipper', 'Consignee', 'Vessel/Voyage', 'Port of Loading', 'Port of Discharge'], color: 'Marítimo' },
  { id: 'invoice', name: 'Commercial Invoice', group: 'Comércio exterior', role: 'Fatura comercial com dados da operação de compra e venda internacional.', fields: ['Exporter', 'Importer', 'Description', 'Currency', 'Incoterm'], color: 'Comex' },
  { id: 'packing', name: 'Packing List', group: 'Comércio exterior', role: 'Detalha a forma como a mercadoria está acondicionada e distribuída em volumes.', fields: ['Volumes', 'Marcas', 'Peso líquido', 'Peso bruto', 'Dimensões'], color: 'Comex' },
  { id: 'duimp', name: 'Duimp', group: 'Aduaneiro', role: 'Declaração Única de Importação elaborada no Portal Único Siscomex para operações abrangidas pelo processo de migração.', fields: ['Identificação', 'Carga', 'Documentos', 'Itens', 'Tratamento administrativo'], color: 'Aduaneiro' }
];

export const documentCases = [
  { id: 'D1', question: 'Qual documento melhor representa o conhecimento do transporte marítimo internacional?', answer: 'bl', explanation: 'O B/L é o conhecimento de embarque marítimo.' },
  { id: 'D2', question: 'Você precisa conferir como 24 caixas estão distribuídas em volumes, com peso e dimensões. Qual documento consultar?', answer: 'packing', explanation: 'O Packing List detalha acondicionamento, volumes, pesos e dimensões.' },
  { id: 'D3', question: 'Qual documento está ligado à prestação de serviço de transporte e possui representação auxiliar chamada DACTE?', answer: 'cte', explanation: 'CT-e é o documento fiscal eletrônico de transporte e o DACTE é sua representação auxiliar.' },
  { id: 'D4', question: 'Qual documento consolida documentos fiscais, veículo e condutor em uma operação de transporte?', answer: 'mdfe', explanation: 'O MDF-e funciona como manifesto eletrônico da operação de transporte.' },
  { id: 'D5', question: 'No Portal Único Siscomex, qual declaração está associada ao novo processo de importação?', answer: 'duimp', explanation: 'A Duimp integra o novo processo de importação no Portal Único Siscomex, observando o cronograma de migração.' }
];
