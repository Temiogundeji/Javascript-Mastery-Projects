let character = "#";
let pyramid = [];
let height = 10;
let count = 0;
let rowString = "";
let result = "";

function paddRow(rowCount, height) {
  return " ".repeat(height - rowCount) + character.repeat(rowCount * 2 + 1);
}

function generateInvertedPyramid() {
  for (let i = height; i >= 0; i--) {
    pyramid.push(paddRow(i, height));
  }

  for (row of pyramid) {
    result += row + "\n";
  }

  console.log(result);
  return result;
}
