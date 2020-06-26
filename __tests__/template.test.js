import { Age } from './../src/solar-age.js';

describe('Age', () => {
  test('should create a new age object', () => {
    const age = new Age(39, 162, 62, 20, 3);
    expect(age).toMatchObject({earthAge: 39, mercuryAge: 162, venusAge: 62, marsAge: 20, jupiterAge: 3});
  });
});

describe('mercuryAge', () => {
  test('should display earth age in mercury age', () => {
    const earthAge = 39;
    expect(mercuryAge).toEqual(162);
  });
});