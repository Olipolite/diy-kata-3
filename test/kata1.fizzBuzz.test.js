const { fizzBuzz, numberToReversedDigits } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(9)).toEqual("Fizz");
    expect(fizzBuzz(21)).toEqual("Fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(25)).toEqual("Buzz");
    expect(fizzBuzz(50)).toEqual("Buzz");
    expect(fizzBuzz(65)).toEqual("Buzz");
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(45)).toEqual("FizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(17)).toEqual(17);
    expect(fizzBuzz(28)).toEqual(28);
    expect(fizzBuzz(47)).toEqual(47);
  });
});
