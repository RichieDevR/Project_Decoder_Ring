// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should return the correct encoded response", () => {
    // actual results from calling polybius()
    const actualNoSpace = polybius("Richard");
    const actualWithSpace = polybius("Richard Rosario");

    // setting up the variables with what should be expected from calling polybius
    const expectedNoSpace = "24423132112441";
    const expectedWithSpace = "24423132112441 24433411244243";

    // expect(actual).to.be.equal(expected);
    expect(actualNoSpace).to.be.equal(expectedNoSpace);
    expect(actualWithSpace).to.be.equal(expectedWithSpace);
  });

 
  it("should encode i and j to 42", () => {
    //actual results from calling polybius()
    const actualI = polybius("i");
    const actualJ = polybius("j");

    // setting up expected results
    const expectedIAndJ = "42";

    // expect(actual)to.be.equal(expected);
    expect(actualI).to.be.equal(expectedIAndJ);
    expect(actualJ).to.be.equal(expectedIAndJ);
  });

  
  it("should return the correct decoded response", () => {
    // actual results from calling polybius()
    const actualNoSpace = polybius("124343211124", false);
    const actualWithSpace = polybius("124343 211124", false);

    // setting up the variables with what should be expected from calling polybius
    const expectedNoSpace = "foobar";
    const expectedWithSpace = "foo bar";

    // expect(actual).to.be.equal(expected);
    expect(actualNoSpace).to.be.equal(expectedNoSpace);
    expect(actualWithSpace).to.be.equal(expectedWithSpace);
  });
});