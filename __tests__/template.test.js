import { Age, calculateMercury } from './../src/solar-age.js';

describe('Age', () => {
  test('should create a new age object', () => {
    const age = new Age(39, 162, 62, 20, 3);
    expect(age).toMatchObject({earthAge: 39, mercuryAge: 162, venusAge: 62, marsAge: 20, jupiterAge: 3});
  });
});

describe('calculateMercury', () => {
  test('should display earth age in mercury age', () => {
    const age = new Age(39, 0, 0, 0, 0);
    expect(calculateMercury(age)).toEqual(162);
  });
});