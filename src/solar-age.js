export class Age {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge, 
    this.mercuryAge = mercuryAge,
    this.venusAge = venusAge,
    this.marsAge = marsAge,
    this.jupiterAge = jupiterAge
  }
}

function calculateMercury(ageObject) {
  let mercuryAge = Math.round(earthAge * 4.17);
}