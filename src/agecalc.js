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
    
  }
}