export const YARD_SCHEMA = {
  blocks: ['A', 'B', 'C', 'D'],
  bays: [1, 2, 3, 4, 5, 6],
  rows: ['A', 'B', 'C', 'D'],
  tiers: [1, 2, 3, 4]
};

export function normalizeYardAddress({ block, bay, row, tier } = {}) {
  return {
    block: String(block || '').toUpperCase(),
    bay: Number(bay),
    row: String(row || '').toUpperCase(),
    tier: Number(tier)
  };
}

export function formatYardAddress(address) {
  const a = normalizeYardAddress(address);
  if (!isValidYardAddress(a)) return '—';
  return `${a.block}-${String(a.bay).padStart(2, '0')}-${a.row}-${String(a.tier).padStart(2, '0')}`;
}

export function isValidYardAddress(address) {
  const a = normalizeYardAddress(address);
  return YARD_SCHEMA.blocks.includes(a.block)
    && YARD_SCHEMA.bays.includes(a.bay)
    && YARD_SCHEMA.rows.includes(a.row)
    && YARD_SCHEMA.tiers.includes(a.tier);
}

export function compareYardAddress(a, b) {
  const na = normalizeYardAddress(a);
  const nb = normalizeYardAddress(b);
  return ['block', 'bay', 'row', 'tier'].every(key => na[key] === nb[key]);
}

export function addressToScenePosition(address, { blockSpacing = 19, baySpacing = 3.25, rowSpacing = 1.45, tierHeight = 1.08 } = {}) {
  const a = normalizeYardAddress(address);
  const blockIndex = Math.max(0, YARD_SCHEMA.blocks.indexOf(a.block));
  const bayIndex = Math.max(0, YARD_SCHEMA.bays.indexOf(a.bay));
  const rowIndex = Math.max(0, YARD_SCHEMA.rows.indexOf(a.row));
  return {
    x: (blockIndex - 1.5) * blockSpacing + (bayIndex - 2.5) * baySpacing,
    y: -0.95 + (Math.max(1, a.tier) - 1) * tierHeight,
    z: (rowIndex - 1.5) * rowSpacing
  };
}
