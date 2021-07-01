// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const upperBoundary = "z";
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
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25||!input) return false;
    const lwrCase = input.toLowerCase();
    if(!encode)shift= -shift;
    const shifted = lwrCase.split('').reduce((acc,char)=> acc+shiftChar(char,shift),"");//.join('');
      


    return shifted;

  }

  return {
    caesar,
  };
})();




    
//     let shifted = [];
//     if (!encode) shift = -shift;
//     for (let char of lwrCase) {
//       const code = char.charCodeAt() + shift;
//       const subt = code - 26;
//       const add = code + 26
//       const space = char.charCodeAt(0);
//       if (shift > 0) {
//         const space = char.charCodeAt(0);
//         if ((char.charCodeAt() < lowerBoundary.charCodeAt())||(char.charCodeAt() > upperBoundary.charCodeAt())) {
//           shifted += char;
//         } else if (code > upperBoundary.charCodeAt()) {
//           shifted += String.fromCharCode(subt)
//         } else {
//           shifted += String.fromCharCode(code);
//         }

//         //return shifted;
//       } else {
//         if ((char.charCodeAt() < lowerBoundary.charCodeAt())||(char.charCodeAt() > upperBoundary.charCodeAt())) {
//           shifted += char;
//         }  else if (code < lowerBoundary.charCodeAt()) {
//           shifted += String.fromCharCode(add);
//         } else {
//           shifted += String.fromCharCode(code);
//         }

//       }
//     }

//     return shifted;

//   }

//   return {
//     caesar,
//   };
// })();


// //abcdefghijklmnopqrstuvwxyz
// //xmmib



// const result = caesarModule.caesar('c', 3,false);


// console.log(result);

module.exports = { caesar: caesarModule.caesar };
