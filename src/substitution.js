// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!input || input === "" || typeof input !== "string") {
      return false;
    }

    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    const standardAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const inputArray = [...input.toLowerCase()];
    const alphabetKey = [...alphabet];
    const encodeKey = {};
    const decodeKey = {};
    const isAlphabetUnique = alphabetKey.reduce((acc, char) => {
      if (!acc.includes(char)) {
        acc.push(char);
      }
      return acc;
    }, []);

    // if isAlphabetUnique.length < 26 then alphabet entered had
    // repeated characters and I need to return false;

    if (isAlphabetUnique.length < 26) {
      return false;
    }

    for (let i = 0; i < alphabetKey.length; i++) {
      decodeKey[alphabetKey[i]] = standardAlphabet[i];
      encodeKey[standardAlphabet[i]] = alphabetKey[i];
    }

    // this is the code that will run when we're encoding
    if (encode === true) {
      const processedMessage = inputArray.map((char) => {
        if (char === " ") {
          return " ";
        }
        return encodeKey[char];
      });
      return processedMessage.join("");
    }

    // we will only get to this code if all parameters were entered
    // and valid and the user is specifically trying to decode a message
    const processedMessage = inputArray.map((char) => {
      if (char === " ") {
        return " ";
      }
      return decodeKey[char];
    });
    return processedMessage.join("");
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
