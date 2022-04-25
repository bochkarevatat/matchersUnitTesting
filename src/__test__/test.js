import sortLiveBar from '../index';

describe('function for show sort live bar', () => {
  test('test show sort live bar', () => {
    const result = sortLiveBar([{
      name: 'мечник',
      health: 10,
    },
    {
      name: 'маг',
      health: 100,
    },
    {
      name: 'лучник',
      health: 80,
    },
    ]);
    expect(result).toEqual([{
      name: 'маг',
      health: 100,
    },
    {
      name: 'лучник',
      health: 80,
    },
    {
      name: 'мечник',
      health: 10,
    },
    ]);
  });
});
