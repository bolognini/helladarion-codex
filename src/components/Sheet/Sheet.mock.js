export const SHEET_DATA = {
  name: 'Monstro Genérico',
  description: `'É tão genérico que nem deram um nome'. - Geraldo, o caçador do bairro`,
  monsterType: 'Monstro',
  size: 'Gigante',
  level: 2,
  challengeLevel: 3,
  defense: '10',
  distance: '5',
  healthpoints: 20,
  manapoints: 10,
  treasury: 'Tesouros encontrados...',
  notes: 'Anotações Gerais...',
  attributes: [
    {
      name: 'FOR',
      value: 10,
      modificator: 0
    },
    {
      name: 'DES',
      value: 10,
      modificator: 0
    },
    {
      name: 'CON',
      value: 12,
      modificator: 1
    },
    {
      name: 'INT',
      value: 12,
      modificator: 1
    },
    {
      name: 'SAB',
      value: 4,
      modificator: -3
    },
    {
      name: 'CAR',
      value: 12,
      modificator: 1
    }
  ],
  senses: [
    {
      name: 'Iniciativa +2',
      rolling: 'D20 + 3'
    },
    {
      name: 'Percepção',
      rolling: 'D20 -2'
    },
    {
      name: 'Visão na Penumbra',
      rolling: ''
    }
  ],
  skills: [
    {
      name: 'Fortitude +2',
      rolling: 'D20 + 4'
    },
    {
      name: 'Reflexo',
      rolling: 'D20 +1'
    },
    {
      name: 'Vontade',
      rolling: 'D20 - 2'
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
      bonus: '',
      damage: '1d4',
      critic: '2x',
      attType: 'Perfurante',
      range: '1m',
      test: 'Luta',
      action: 'Padrão',
      manaCost: '-'
    },
    {
      attackName: 'Derrubar',
      bonus: '+8',
      damage: '',
      critic: '',
      attType: '',
      range: '',
      test: 'Livre',
      action: 'Livre',
      manaCost: '-'
    },
    {
      attackName: 'Veneno',
      bonus: '',
      damage: '1d12/1d6r',
      critic: '',
      attType: '',
      range: '',
      test: 'Oposto 22',
      action: 'Padrão',
      manaCost: '1 PM'
    },
    {
      attackName: 'Espada Longa +13',
      bonus: '',
      damage: '1d8+5',
      critic: '19',
      attType: 'Cortante',
      range: '1m',
      test: 'Oposto',
      action: 'Padrão',
      manaCost: '-'
    },
    {
      attackName: 'Arroto Gelado',
      bonus: '1D3',
      damage: '6D6',
      critic: '',
      attType: 'Frio',
      range: '',
      test: 'Oposto',
      action: 'Padrão',
      manaCost: '3 PM'
    }
  ]
}
