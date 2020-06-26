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

export function calculateLifeExpectancy(age, life) {
  let LifeExpectancy = 0;
  if (life -age > 0){
    LifeExpectancy = (life - age);
  } else if (life - age < 0) {
    LifeExpectancy = `You've surpassed life expectancy on your planet by ${age-life} years !`;
  }
  return LifeExpectancy;
}

  // } else if (life - age < 0) {
  //   let LifeExpectancy = `You've surpassed life expectancy on your planet by ${age-life} years !`;
  // } else if (age === life) {
  //   let LifeExpectancy = "Youll probably die this year";
  // }
