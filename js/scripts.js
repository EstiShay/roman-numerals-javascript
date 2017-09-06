// back-end logic
var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanNum =["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"];

function convertedNumber (userInput) {
  var result = "";
  if (userInput > 0 && userInput <= 3999) {
    for (var i = 0; i < nums.length; i++) {
      while (userInput >= nums[i]) {
        result += romanNum[i];
        userInput -= nums[i];
      }
    }
    console.log(result);
  }
  else {
    result = "Please enter a number from 1 to 3999";
  }
  return result;
}

exports.convertModule = convertedNumber;
