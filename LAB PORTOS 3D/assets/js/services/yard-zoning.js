import { formatYardAddress } from './yard-addressing.js';

export const YARD_ZONES = [
  { id:'general-import', label:'Importação seca', blocks:['A'], accent:'#4e8aa0', rule:'Carga seca de importação / retirada terrestre.' },
  { id:'general-export', label:'Exportação seca', blocks:['B'], accent:'#d39b31', rule:'Pré-embarque e janela operacional.' },
  { id:'reefer', label:'Reefer energizado', blocks:['C'], bays:[1,2,3], accent:'#5eb5a4', rule:'Tomadas, monitoramento e ronda de temperatura.' },
  { id:'dg', label:'Carga perigosa (DG)', blocks:['C'], bays:[4,5,6], accent:'#d16d55', rule:'Segregação didática; aplicar regras e procedimentos locais reais.' },
  { id:'oog', label:'OOG / dimensões especiais', blocks:['D'], bays:[1,2,3], accent:'#9b78d0', rule:'Área para unidade fora de gabarito / operação especial.' },
  { id:'special', label:'Especial / contingência', blocks:['D'], bays:[4,5,6], accent:'#75848b', rule:'Reserva operacional do exercício.' }
];

export function classifyCargo(cargo={}) {
  if (cargo.reefer) return 'reefer';
  if (cargo.dg) return 'dg';
  if (cargo.oog) return 'oog';
  return cargo.flow === 'import' ? 'general-import' : 'general-export';
}

export function zoneForAddress(address={}) {
  return YARD_ZONES.find(z => z.blocks.includes(String(address.block||'').toUpperCase()) && (!z.bays || z.bays.includes(Number(address.bay)))) || null;
}

export function recommendAddress(cargo={}, seed=0) {
  const zoneId=classifyCargo(cargo); const zone=YARD_ZONES.find(z=>z.id===zoneId) || YARD_ZONES[0];
  const block=zone.blocks[seed%zone.blocks.length]; const bays=zone.bays || [1,2,3,4,5,6];
  const bay=bays[seed%bays.length]; const rows=['A','B','C','D']; const row=rows[seed%rows.length]; const tier=cargo.oog?1:(seed%3)+1;
  const address={block,bay,row,tier};
  return { zone, address, formatted:formatYardAddress(address) };
}

export function validateCargoAtAddress(cargo,address) {
  const expected=classifyCargo(cargo); const actual=zoneForAddress(address);
  return { valid: actual?.id===expected, expected, actual:actual?.id || null, zone:actual };
}
