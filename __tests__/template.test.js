import { Age, checkInput, calculateMercury, calculateVenus, calculateMars, calculateJupiter, calculateLifeExpectancy } from './../src/solar-age.js';

describe('Age', () => {
  test('should create a new age object', () => {
    const age = new Age(39, 162, 62, 20, 3);
    expect(age).toMatchObject({earthAge: 39, mercuryAge: 162, venusAge: 62, marsAge: 20, jupiterAge: 3});
  });
});

describe('checkInput', () => {
  test('should return false if user input is not a whole number', () => {
    const age = new Age(5.25, 0, 0, 0, 0);
    const age1 = new Age(-25, 0, 0, 0, 0);
    const age2 = new Age("megan", 0, 0, 0, 0);
    const age3 = new Age(39, 0, 0, 0, 0);
    expect(checkInput(age)).toEqual(false);
    expect(checkInput(age1)).toEqual(false);
    expect(checkInput(age2)).toEqual(false);
    expect(checkInput(age3)).toEqual(true);
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

describe('calculateLifeExpectancy', () => {
  test('should calculate how long a user has to live on earth, or by how much they have surpassed life expenctancy', () => {
    const age = 39;
    const life = 80;
    const overAge = 87;
    const equalAge = 80;
    // cost equalAge = 80;
    expect(calculateLifeExpectancy(age, life)).toEqual([1, 41]);
    expect(calculateLifeExpectancy(overAge,life)).toEqual([2, 7]);
    expect(calculateLifeExpectancy(equalAge, life)).toEqual([3, 0]);
  });
});

