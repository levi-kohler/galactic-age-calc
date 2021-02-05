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
    expect(ageCalc.mercuryAge()).toEqual(208.33)
  });
})