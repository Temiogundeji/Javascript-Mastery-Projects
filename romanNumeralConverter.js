//Declare variable to hold result
let romanNumeralEquivalent = "";
//Number to convert
let numToConvert = 3220;

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
  let brokenNumber = breakToPlaceValue(number);
  romanNumeralEquivalent = brokenNumber.map((value, index) => {});
  console.log(brokenNumber);
}

convertToRomanNumeral(2345);

// Determine the hundredth, Tenth and Units
// Convert each value into its equivalents considering its positions
// Make case for repition rule:
// When a value is a single digit whole number, merge its equivalent to romanNumeralEquivalent string variable.
// When a value is a double digit whole number, break it down into its constituents and merge it to romanNumeralEquivalent string variable
// When a value is tripple digit whole number, break it down into its constituents and merge it to romanNumeralEquivalent string variable
// When a value is divided by hundred, ten, or unit. And the remainder is zero, repeat the roman numeral equivalent Thousands, Hundred, Tenths and unit the number of time equivalent to the value divided value: hundred, tenth, units.
// Make case for subraction rule
// If number lesser by hundreds, tenths, and units doesn't return any of (VXLCDM), the value returned is gotten by moving the roman numeral equivalent of the divisor to the back.
// Make case for addtion rule
// For numbers not following the above convention break it down into its constituent using hundreds, tens and unit and merge them.
//Other rules:
//- I can only subtract from V (5) and X (10).
//- X can only subtract from L (50) and C (100).
//- C can only subtract from D (500) and M (1000)
//- The same symbol can be repeated up to three times, but not more (e.g., IIII is incorrect, use IV for 4).
