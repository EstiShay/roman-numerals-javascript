// user interfsce logic
$(document).ready(function(){
  $("form#romanForm").submit(function(event){
     event.preventDefault();
     var number = parseInt($("#userInput").val());
     convertedNumber(number);
  });

});

// back-end logic
//var romanNum = ["I", "V", "X", "L", "C", "D", "M"];
//var nums = [1, 5, 10, 50, 100, 500, 1000];
var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanNum =["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"];

var convertedNumber = function(userInput) {
var result = "";
if (userInput > 0 && userInput <= 3999) {
for (var i = 0; i < nums.length; i++) {
  while (userInput >= nums[i]) {
    result += romanNum[i];
    userInput -= nums[i];
  };
}
console.log(result);

  // while(userInput >= 1000) {
  //   result += "M";
  //   userInput -= 1000;
  // }
  // while(userInput >= 900) {
  //   result += "CM";
  //   userInput -= 900;
  // }
  // while(userInput >= 500) {
  //   result += "D";
  //   userInput -= 500;
  // }
  // while(userInput >= 400) {
  //   result += "CD";
  //   userInput -= 400;
  // }
  // while(userInput >= 100) {
  //   result += "C";
  //   userInput -= 100;
  // }
  // while(userInput >= 90) {
  //   result += "XC";
  //   userInput -= 90;
  // }
  // while(userInput >= 50) {
  //   result += "L";
  //   userInput -= 50;
  // }
  // while(userInput >= 40) {
  //   result += "XL";
  //   userInput -= 40;
  // }
  // while(userInput >= 10) {
  //   result += "X";
  //   userInput -= 10;
  // }
  // while(userInput >= 9) {
  //   result += "IX";
  //   userInput -= 9;
  // }
  // while(userInput >= 4) {
  //   result += "IV";
  //   userInput -= 4;
  // }
  // while(userInput >= 1) {
  //   result += "I";
  //   userInput -= 1;
  // }
  //
  // console.log(result);

 }
else {
  alert("Please enter a number from 1 to 3999");
  }
}
