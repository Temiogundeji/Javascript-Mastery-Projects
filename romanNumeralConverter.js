//Declare variable to hold result
let romanNumeralEquivalent = "";
//Number to convert
let numToConvert = 3220;
const romanNumerals = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

function breakToPlaceValue(numToConvert = 3412) {
  let splittedNumToConvert = numToConvert
    .toString()
    .split("")
    .map((x) => Number(x));

  let placeValuesArr = [];
  let splittedNumValues = [];

  for (let i in splittedNumToConvert) {
    let splittedValuesString = splittedNumToConvert
      .slice(i, splittedNumToConvert.length)
      .join("");
    placeValuesArr.push(splittedValuesString);
    splittedNumValues = placeValuesArr.map((value, i) => {
      let divisor = Math.pow(10, 3 - i);
      return Math.floor(Number(value) / divisor) * divisor;
    });
  }
  return splittedNumValues;
}

function convertToRomanNumeral(number) {
  if (number >= 4000) {
    throw new Error("Number must not be upto 4000");
  } else if (number < 0 || typeof number === "String") {
    throw new Error("Number cannot be less than zero or string");
  }
  let brokenNumber = breakToPlaceValue(number);
  brokenNumber.map((value, index) => {
    if (romanNumerals[value]) {
      romanNumeralEquivalent += romanNumerals[value];
    } else {
      let power = Math.pow(10, 3 - index);
      let romanNumeralChars = romanNumerals[power].repeat(value / power);
      romanNumeralEquivalent += romanNumeralChars;
    }
  });
  console.log(romanNumeralEquivalent);
  return romanNumeralEquivalent;
}

convertToRomanNumeral(3125);
