function checkPalindrome(word = "") {
  // Trim all spaces and remove alphanumeric characters, to get the actual word.
  let actualString = word
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  // Reverse the actual word
  return actualString === actualString.split("").reverse().join("")
    ? true
    : false;
}

let result = checkPalindrome("#_MU#(M");
console.log(result);
