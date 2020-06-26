export class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge, 
    this.mercuryAge = mercuryAge,
    this.venusAge = venusAge,
    this.marsAge = marsAge,
    this.jupiterAge = jupiterAge
  }
}

export function calculateMercury(ageObject) {
  const mercuryAge = Math.floor(ageObject.earthAge * 4.17);
  return mercuryAge;
}
