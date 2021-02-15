export default class Calculator {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercuryAge() {
    return Math.floor(this.age / .24);
  }

  venusAge() {
    return Math.floor(this.age / .62)
  }

  marsAge() {
    return Math.floor(this.age / 1.88)
  }

  jupiterAge() {
    return Math.floor(this.age / 11.86)
  }

  earthYearsLeft() {
    return (this.lifeExpectancy - this.age)
  }

  mercuryYearsLeft() {
    return ((this.lifeExpectancy - this.age) / .24)
  }

  venusYearsLeft() {
    return ((this.lifeExpectancy - this.age) / .62)
  }

  marsYearsLeft() {
    return ((this.lifeExpectancy - this.age) / 1.88)
  }

  jupiterYearsLeft() {
    return ((this.lifeExpectancy - this.age) / 11.86)
  }

  passedExpectedEarth() {
    let overExpectedEarth = (this.age - this.lifeExpectancy);
    let overExpectedEarthStatement = (`Congrats! You've made it ${overExpectedEarth} years longer than any of us thought you would`)
    if (this.lifeExpectancy < this.age); {
      return overExpectedEarthStatement;
    }
  }

  passedExpectedMercury() {
    let overExpectedMercury = Math.floor((this.age - this.lifeExpectancy) / .24);
    let overExpectedMercuryStatement = (`Congrats! You've made it ${overExpectedMercury} years longer than any of us thought you would`)
    if (this.lifeExpectancy < this.age); {
      return overExpectedMercuryStatement;
    }
  }
}
