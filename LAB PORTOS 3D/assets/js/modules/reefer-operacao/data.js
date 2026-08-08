export const reeferScenario = {
  id: 'R01', cargo: 'Carga congelada — simulação', requiredSetPoint: -18,
  initial: { powered: false, setPoint: -12, supply: -11.4, returnTemp: -8.7, alarm: 'SET POINT INCORRETO' },
  steps: [
    { id: 'power', label: 'Energizar unidade' },
    { id: 'setpoint', label: 'Ajustar set point para -18 °C' },
    { id: 'verify', label: 'Verificar leitura e registrar condição' }
  ]
};
