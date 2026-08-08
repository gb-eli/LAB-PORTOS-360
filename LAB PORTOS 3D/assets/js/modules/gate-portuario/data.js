export const gateCases = [
  { id: 'G01', plate: 'ABC1D23', booking: 'BK-90118', sealExpected: 'SEAL-4481', sealRead: 'SEAL-4481', docs: true, appointment: true, expected: 'autorizar', note: 'Dados e lacre conferem.' },
  { id: 'G02', plate: 'DEF4G56', booking: 'BK-90122', sealExpected: 'SEAL-7810', sealRead: 'SEAL-7819', docs: true, appointment: true, expected: 'reter', note: 'Divergência de lacre exige tratamento antes da entrada.' },
  { id: 'G03', plate: 'HIJ7K89', booking: 'BK-90131', sealExpected: 'SEAL-1150', sealRead: 'SEAL-1150', docs: false, appointment: true, expected: 'reter', note: 'Documentação está incompleta.' },
  { id: 'G04', plate: 'LMN0P12', booking: 'BK-90145', sealExpected: 'SEAL-3220', sealRead: 'SEAL-3220', docs: true, appointment: false, expected: 'reter', note: 'Agendamento não localizado para a janela simulada.' }
];
