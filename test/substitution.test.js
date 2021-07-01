// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the input is empty, missing, or not a string", () => {
    // actual results that come back from calling substitution
    const actualEmptyString = substitution("", "xoyqmcgrukswaflnthdjpzibev");
    const actualMissingMessage = substitution();
    const actualMessageNotAString = substitution(
      65,
      "xoyqmcgrukswaflnthdjpzibev"
    );

    // expect(actual).to.be.false;
    expect(actualEmptyString).to.be.false;
    expect(actualMissingMessage).to.be.false;
    expect(actualMessageNotAString).to.be.false;
  });

  it("should return false if the substitution key is not 26 characters", () => {
    // actual results that come back from calling substitution
    const actualLessThan26chars = substitution("Kevin", "aidbelskdpq");
    const actualMoreThan26chars = substitution(
      "Kevin",
      "xoyqmcgruksw#aflnt^hdjpzibev2"
    );
    const actualEmptySubstitutionKey = substitution("Kevin", "");
    const actualMissingSubstitutionKey = substitution("Kevin");

    // expect(actual).to.be.false;
    expect(actualLessThan26chars).to.be.false;
    expect(actualMoreThan26chars).to.be.false;
    expect(actualEmptySubstitutionKey).to.be.false;
    expect(actualMissingSubstitutionKey).to.be.false;
  });

  it("should return false if all characters in substitution key are not unique", () => {
    // actual results that come back from calling substitution
    const actualAllCharactersNotUnique = substitution(
      "Kevin",
      "abcabcabcabcabcabcabcabcyz"
    );

    // expect(actual).to.be.false;
    expect(actualAllCharactersNotUnique).to.be.false;
  });

  it("should return the correct response when encoding", () => {
    // actual results that come back from calling substitution
    const actualEncode = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");

    // expected results that should come back from calling substitution
    const expectedEncode = "jrufscpw";

    // expect(actual)to.be.equal(expected)
    expect(actualEncode).to.be.equal(expectedEncode);
  });

  it("should return the correct response when decoding", () => {
    // actual results that come back from calling substitution
    const actualDecode = substitution(
      "Elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const actualDecode2 = substitution(
      ")#$$`^#",
      "`lmo#n^jbuhv)gctfx$dzeswaq",
      false
    );

    // expected results that should come back from calling substitution
    const expectedDecode = "you are an excellent spy";
    const expectedDecode2 = "message";

    // expect(actual)to.be.equal(expected)
    expect(actualDecode).to.be.equal(expectedDecode);
    expect(actualDecode2).to.be.equal(expectedDecode2);
  });
});