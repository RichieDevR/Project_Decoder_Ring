// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("return false if shift variable is 0, < -25 or > 25 or not present", () => {
    // setting up my variable to find the actual results
    const actualShift0 = caesar("thinkful", 0);
    const actualShiftLessThan25 = caesar("thinkful", -26);
    const actualShiftGreaterThan25 = caesar("thinkful", 26);
    const actualShiftNotPresent = caesar("thinkful");

    // expect(actual).to.be.false;
    expect(actualShift0).to.be.false;
    expect(actualShiftLessThan25).to.be.false;
    expect(actualShiftGreaterThan25).to.be.false;
    expect(actualShiftNotPresent).to.be.false;
  });

  it("should return the encoded message correctly", () => {
    // setting up my variable to find the actual results
    const actualPlus3 = caesar("zany", 3);
    const actualMinus6 = caesar("zany", -6);
    const actualPlus3WithSpace = caesar("Zoo animal", 3);

    // setting up my variable with the expected results
    const expectedPlus3 = "cdqb";
    const expectedMinus6 = "tuhs";
    const expectedPlus3WithSpace = "crr dqlpdo";

    // expect(actual).to.equal(expected);
    expect(actualPlus3).to.equal(expectedPlus3);
    expect(actualMinus6).to.equal(expectedMinus6);
    expect(actualPlus3WithSpace).to.equal(expectedPlus3WithSpace);
  });

  it("should return the decoded message correctly", () => {
    // setting up my variable to find the actual results
    const actualPlus3 = caesar("cdqb", 3, false);
    const actualMinus6 = caesar("tuhs", -6, false);
    const actualPlus3WithSpace = caesar("crr dqlpdo", 3, false);

    // setting up my variable with the expected results
    const expectedPlus3 = "zany";
    const expectedMinus6 = "zany";
    const expectedPlus3WithSpace = "zoo animal";

    // expect(actual).to.equal(expected);
    expect(actualPlus3).to.equal(expectedPlus3);
    expect(actualMinus6).to.equal(expectedMinus6);
    expect(actualPlus3WithSpace).to.equal(expectedPlus3WithSpace);
  });
});