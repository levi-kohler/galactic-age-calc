import { TestScheduler } from "jest";
import Calculator from "../src/agecalc.js";

describe("Calculator", () => {
  let ageCalc;
  beforeEach(() => {
    ageCalc = new Calculator(50,100)
  });

  test("it should correctly create a Calculator object with 2 keys", () => {
    const calculator = new Calculator("","");
    expect(calculator.age).toEqual("");
    expect(calculator.lifeExpectancy).toEqual("");
  });

  test("it should determine what the users age is in Mercury years", () => {
    expect(ageCalc.mercuryAge()).toEqual(208)
  });

  test("it should determine what the users age is in Venus years", () => {
    expect(ageCalc.venusAge()).toEqual(80)
  });

  test("it should determine what the users age is in Mars years", () => {
    expect(ageCalc.marsAge()).toEqual(26)
  });

  test("it should determine what the users age is in Jupiter years", () => {
    expect(ageCalc.jupiterAge()).toEqual(4)
  }); 

  test("it should determine how many years a user has left to live on Earth", () => {
    expect(ageCalc.earthYearsLeft()).toEqual(50)
  });

  test("it should determine how many years a user has left to live on Mercury", () => {
    expect(ageCalc.mercuryYearsLeft()).toEqual(50 / .24)
  });

  test("it should determine how many years a user has left to live on Venus", () => {
    expect(ageCalc.venusYearsLeft()).toEqual(50 / .62)
  });

  test("it should determine how many years a user has left to live on Mars", () => {
    expect(ageCalc.marsYearsLeft()).toEqual(50 / 1.88)
  });

  test("it should determine how many years a user has left to live on Jupiter", () => {
    expect(ageCalc.jupiterYearsLeft()).toEqual(50 / 11.86)
  });

  let person;
  beforeEach(() => {
    person = new Calculator(110,100)
  });

  test("it should tell a user how much they have lived past the life expectancy", () => {
    expect(person.passedExpected()).toEqual("Congrats! You've made it 10 years longer than any of us thought you would")
  })
  
});