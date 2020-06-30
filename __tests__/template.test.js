import { Age } from './../src/solar-age.js';

describe('Age', () => {
  let age;

  beforeEach(function() {
    age = new Age(39);
  });

  test('should correctly create a new age object', () => {
    expect(age).toBeInstanceOf(Age);
  });

  describe('checkInput', () => {
    test('should return false if user input is not a whole number', () => {
      const age1 = new Age(-25);
      const age2 = new Age("megan");
      const age3 = new Age(5.25);
      expect(age.checkInput()).toEqual(true);
      expect(age1.checkInput()).toEqual(false);
      expect(age2.checkInput()).toEqual(false);
      expect(age3.checkInput()).toEqual(false);
    });
  });

  describe('calculateMercury', () => {
    test('should display earth age in mercury age', () => {
      age.calculateMercury();
      expect(age.mercuryAge).toEqual(162);
    });
  });

  describe('calculateVenus', () => {
    test('should display earth age in venus age', () => {
      age.calculateVenus();
      expect(age.venusAge).toEqual(62);
    });
  });

  describe('calculateMars', () => {
    test('should display earth age in mars age', () => {
      age.calculateMars();
      expect(age.marsAge).toEqual(20);
    });
  });

  describe('calculateJupiter', () => {
    test('should display earth age in jupiter age', () => {
      age.calculateJupiter();
      expect(age.jupiterAge).toEqual(3);
    });
  });

  describe('calculateLifeExpectancy', () => { 
    test('should calculate how long a user has to live', () => {
      let life = 80;
      age.calculateLifeExpectancy(life);
      expect(age.LifeExpectancy).toEqual([1, 41]);
  });
});

describe('calculateLifeExpectancy', () => { 
  test('should calculate by how much a user has surpassed life expenctancy', () => {
    let life = 80;
    let age = new Age(87);
    age.calculateLifeExpectancy(life);
    expect(age.LifeExpectancy).toEqual([2, 7]);
  });
});

describe('calculateLifeExpectancy', () => { 
  test('should calculate if a user is at the exact year of their life expectancy', () => {
    let life = 80;
    let age = new Age(80);
    age.calculateLifeExpectancy(life);
    expect(age.LifeExpectancy).toEqual([3, 0]);
  });
});
});


      // expect(calculateLifeExpectancy(overAge,life)).toEqual([2, 7]);
      // expect(calculateLifeExpectancy(equalAge, life)).toEqual([3, 0]);



// describe('calculateLifeExpectancy', () => {
//   test('should calculate how long a user has to live on earth, or by how much they have surpassed life expenctancy', () => {
//     const age = new Age(39, 0, 0, 0, 0);
//     const life = 80;
//     const overAge = new Age(87, 0, 0, 0, 0);
//     const equalAge = new Age(80, 0, 0, 0, 0);
//     // cost equalAge = 80;
//     expect(calculateLifeExpectancy(age, life)).toEqual([1, 41]);
//     expect(calculateLifeExpectancy(overAge,life)).toEqual([2, 7]);
//     expect(calculateLifeExpectancy(equalAge, life)).toEqual([3, 0]);
//   });
// });

