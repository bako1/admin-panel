import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20260109_061328 from './20260109_061328';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20260109_061328.up,
    down: migration_20260109_061328.down,
    name: '20260109_061328'
  },
];
