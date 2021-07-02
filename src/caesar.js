// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const lowerBoundary = "a";

  function shiftChar(input, shift) {
    let char = input.charCodeAt();
    char -= lowerBoundary.charCodeAt();
    if(char < 0||char > 25){
      return input;
    }
    char += shift;
    if (char < 0) {
      char += 26
    }
    if (char > 25) {
      char -= 26;
    }
    let pop =  char + lowerBoundary.charCodeAt();
      return String.fromCharCode(pop);
  }


  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25||!input) return false;
    const lwrCase = input.toLowerCase();
    if(!encode)shift= -shift;
    const shifted = lwrCase.split('').reduce((acc,char)=> acc+shiftChar(char,shift),"");
   

    return shifted;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
