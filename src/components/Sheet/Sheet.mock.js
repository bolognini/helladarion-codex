export const SHEET_DATA = {
  name: 'Verme de Gelo',
  description: `'Algo está devorando os mamutes. Nós seremos os próximos'. - Espírito-de-Pedra, xamã das Montanhas Uivantes`,
  level: '11',
  defense: '25',
  distance: '12',
  healthpoints: 120,
  attributes: [
    {
      name: 'FOR',
      value: 30,
      modificator: 9
    },
    {
      name: 'DES',
      value: 10,
      modificator: 0
    },
    {
      name: 'CON',
      value: 22,
      modificator: 6
    },
    {
      name: 'INT',
      value: 2,
      modificator: -4
    },
    {
      name: 'SAB',
      value: 12,
      modificator: 1
    },
    {
      name: 'CAR',
      value: 8,
      modificator: -1
    }
  ],
  senses: [
    {
      name: 'Iniciativa +16',
      rolling: 'D20 + 16'
    },
    {
      name: 'Percepção +17',
      rolling: 'D20 + 18'
    },
    {
      name: 'Visão no Escuro',
      rolling: ''
    }
  ],
  resistances: [
    {
      name: 'Fortitude +14',
      rolling: 'D20 + 20'
    },
    {
      name: 'Reflexo +8',
      rolling: 'D20 + 8'
    },
    {
      name: 'Vontade +7',
      rolling: 'D20 + 8'
    },
    {
      name: 'Imunidade à frio',
      rolling: ''
    },
    {
      name: 'Vulnerabilidade à fogo',
      rolling: ''
    }
  ],
  attacks: [
    {
      attackName: 'Mordida',
      bonus: '1D3',
      damage: '6D6',
      critic: '',
      attType: 'Frio',
      range: '',
      test: 'Luta'
    },
    {
      attackName: 'Baforada de Gelo',
      bonus: '',
      damage: '1D8',
      critic: '',
      attType: 'Frio',
      range: '',
      test: 'Oposto'
    },
    {
      attackName: 'Espasmo Mortal',
      bonus: '',
      damage: '',
      critic: '',
      attType: '',
      range: '18m',
      test: 'Oposto'
    },
    {
      attackName: 'Rugido Amendrontador',
      bonus: '1D3',
      damage: '6D6',
      critic: '',
      attType: 'Frio',
      range: '',
      test: 'Oposto'
    },
    {
      attackName: 'Arroto Gelado',
      bonus: '1D3',
      damage: '6D6',
      critic: '',
      attType: 'Frio',
      range: '',
      test: 'Oposto'
    }
  ]
}
