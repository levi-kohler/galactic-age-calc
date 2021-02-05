import { TestScheduler } from "jest";
import Calculator from "../src/agecalc.js";

describe("Calculator", () => {

  test("it should correctly create a Calculator object with 2 keys", () => {
    const calculator = new Calculator("","");
    expect(calculator.age).toEqual("");
    expect(calculator.lifeExpectancy).toEqual("");
  });
})