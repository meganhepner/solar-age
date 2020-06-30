export class Age {

  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  checkInput() {
    if (this.earthAge > 0 && Number.isInteger(this.earthAge)) {
      return true;
    } else {
      return false;
    }
  }

  calculateMercury() {
    this.mercuryAge = Math.floor(this.earthAge * 4.17);
  }

  calculateVenus() {
    this.venusAge = Math.floor(this.earthAge * 1.61);
  }

  calculateMars() {
    this.marsAge = Math.floor(this.earthAge * .53);
  }

  calculateJupiter() {
    this.jupiterAge = Math.floor(this.earthAge * .08);
  }

  calculateEarthLifeExpectancy(life) {
    if (life - this.earthAge > 0) {
      this.LifeExpectancy = (life - this.earthAge);
      this.MercuryExpectancy = Math.round(this.LifeExpectancy * 4.17);
      this.VenusExpectancy = Math.round(this.LifeExpectancy * 1.61);
      this.MarsExpectancy = Math.round(this.LifeExpectancy * .53);
      this.JupiterExpectancy = Math.round(this.LifeExpectancy *.08)
    } else if (life - this.earthAge < 0) {
      this.LifeOverage = Math.abs(life - this.earthAge);
      this.MercuryOverage = Math.round(this.LifeOverage * 4.17);
      this.VenusOverage = Math.round(this.LifeOverage * 1.61);
      this.MarsOverage = Math.round(this.LifeOverage * .53);
      this.JupiterOverage = Math.round(this.LifeOverage *.08)
    } else if (life === this.earthAge) {
      this.LifeEven = 0;
    }
  }

  calculateMercuryLifeExpectancy(earthLifeExpectancy) {
    if (this.LifeExpectancy) {
      this.mercuryExpectancy = (this.LifeExpectancy * 4.17);
    } else if (this.LifeOverage) {
      this.mercuryOverage = [2, Math.abs(life - this.earthAge)];
    } else if (life === this.earthAge) {
      this.LifeExpectancy = [3, 0];
    }
  }

}
  
