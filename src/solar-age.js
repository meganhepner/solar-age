export class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge, 
    this.mercuryAge = mercuryAge,
    this.venusAge = venusAge,
    this.marsAge = marsAge,
    this.jupiterAge = jupiterAge
  }
}

export function checkInput(ageObject) {
  if (ageObject.earthAge > 0 && Number.isInteger(ageObject.earthAge)) {
    return true;
  } else {
    return false;
  }
} 

export function calculateEarthAge(ageObject) {
  
}

export function calculateMercury(ageObject) {
  const mercuryAge = Math.floor(ageObject.earthAge * 4.17);
  return mercuryAge;
  
}

export function calculateVenus(ageObject) {
  const venusAge = Math.floor(ageObject.earthAge * 1.61);
  return venusAge;
}

export function calculateMars(ageObject) {
  const marsAge = Math.floor(ageObject.earthAge * .53);
  return marsAge;
}

export function calculateJupiter(ageObject) {
  const jupiterAge = Math.floor(ageObject.earthAge * .08);
  return jupiterAge;
}

export function calculateLifeExpectancy(ageObject, life) {
  let LifeExpectancy = [0, 0];
  if (life - ageObject.earthAge > 0){
    LifeExpectancy = [1, (life - ageObject.earthAge)];
  } else if (life - ageObject.earthAge < 0) {
    LifeExpectancy = [2, (ageObject.earthAge - life)];
  } else if (ageObject.earthAge === life) {
    LifeExpectancy = [3,0];
  }
  return LifeExpectancy;
}

  
