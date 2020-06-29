import { Age } from './../src/solar-age.js'

describe('Age', () => {
  let age;

beforeEach(function() {
  age = new Age(39);
});


test('should correctly create a new age object', () => {
  expect(age).toBeInstanceOf(Age);
  });

});

// describe('checkInput', () => {
//   test('should return false if user input is not a whole number', () => {
//     const age = new Age(5.25, 0, 0, 0, 0);
//     const age1 = new Age(-25, 0, 0, 0, 0);
//     const age2 = new Age("megan", 0, 0, 0, 0);
//     const age3 = new Age(39, 0, 0, 0, 0);
//     expect(checkInput(age)).toEqual(false);
//     expect(checkInput(age1)).toEqual(false);
//     expect(checkInput(age2)).toEqual(false);
//     expect(checkInput(age3)).toEqual(true);
//   });
// });

// describe('calculateEarthAge', () => {
//   test('should accept input from ETs and calculate their age in Earth years', () => {
//     const ageEarth= new Age(39, 0, 0, 0, 0);
//     const ageMercury= new Age(0, 4.17, 0, 0, 0);
//     const ageVenus= new Age(0, 0, 1.61, 0, 0);
//     const ageMars= new Age(0, 0, 0, .53, 0);
//     const ageJupiter= new Age(0, 0, 0, 0, .08);
//     expect(calculateEarthAge(ageEarth)).toEqual(39);
//     expect(calculateEarthAge(ageEarth)).toEqual(39);
//     expect(calculateEarthAge(ageEarth)).toEqual(39);
//     expect(calculateEarthAge(ageEarth)).toEqual(39);
//     expect(calculateEarthAge(ageEarth)).toEqual(39);
//   });
// });

// describe('calculateMercury', () => {
//   test('should display earth age in mercury age', () => {
//     const age = new Age(39, 0, 0, 0, 0);
//     expect(calculateMercury(age)).toEqual(162);
//   });
// });

// describe('calculateVenus', () => {
//   test('should display earth age in venus age', () => {
//     const age = new Age(39, 0, 0, 0, 0);
//     expect(calculateVenus(age)).toEqual(62);
//   });
// });

// describe('calculateMars', () => {
//   test('should display earth age in mars age', () => {
//     const age = new Age(39, 0, 0, 0, 0);
//     expect(calculateMars(age)).toEqual(20);
//   });
// });

// describe('calculateJupiter', () => {
//   test('should display earth age in jupiter age', () => {
//     const age = new Age(39, 0, 0, 0, 0);
//     expect(calculateJupiter(age)).toEqual(3);
//   });
// });

// // describe('calculateLifeExpectancy', () => { WORKING CODE !!!
// //   test('should calculate how long a user has to live on earth, or by how much they have surpassed life expenctancy', () => {
// //     const age = new Age(39, 0, 0, 0, 0);
// //     const life = 80;
// //     const overAge = new Age(87, 0, 0, 0, 0);
// //     const equalAge = new Age(80, 0, 0, 0, 0);
// //     // cost equalAge = 80;
// //     expect(calculateLifeExpectancy(age, life)).toEqual([1, 41]);
// //     expect(calculateLifeExpectancy(overAge,life)).toEqual([2, 7]);
// //     expect(calculateLifeExpectancy(equalAge, life)).toEqual([3, 0]);
// //   });
// // });

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

