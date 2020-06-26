import { Age, calculateMercury, calculateVenus, calculateMars, calculateJupiter } from './../src/solar-age.js';

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

describe('calculateVenus', () => {
  test('should display earth age in venus age', () => {
    const age = new Age(39, 0, 0, 0, 0);
    expect(calculateVenus(age)).toEqual(62);
  });
});

describe('calculateMars', () => {
  test('should display earth age in mars age', () => {
    const age = new Age(39, 0, 0, 0, 0);
    expect(calculateMars(age)).toEqual(20);
  });
});

describe('calculateJupiter', () => {
  test('should display earth age in jupiter age', () => {
    const age = new Age(39, 0, 0, 0, 0);
    expect(calculateJupiter(age)).toEqual(3);
  });
});