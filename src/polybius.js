
const polybiusModule = (function () {

  const DECODE_KEY = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  const ENCODE_KEY = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };




  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let split;
    let KEY = ENCODE_KEY;
    if (encode) {
      split = input.split("");
    } else {
      KEY = DECODE_KEY;
      split = input.split(" ");
      const isOdd = split.reduce((acc, arr) => acc + arr.length, 0) % 2;
      if (isOdd) return false;
      split = split
        .map((section) => {
          return section.split("").reduce((acc, char, idx, arr) => {
            if (char === " ") {
              acc.push(" ");
            } else if (!(idx % 2)) {
              acc.push(char + arr[idx + 1]);
            }
            return acc;
          }, []);
        })
        .reduce((a, b) => a.concat(" ", b));
    }
    return split.map((char) => KEY[char] || " ").join("");
  }
  return { polybius };
})();




module.exports = { polybius: polybiusModule.polybius };
