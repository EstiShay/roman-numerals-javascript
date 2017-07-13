// user interfsce logic
$(document).ready(function(){
  $("form#romanForm").submit(function(event){
     event.preventDefault();
     var number = parseInt($("#userInput").val());
     convertedNumber(number);

  });

});



// back-end logic
// var num = {"1": "I",
//            "5": "V",
//            10: "X",
//            50: "L",
//            100: "C",
//            500: "D",
//            1000:"M"};
var num = {one: "I", five: "V" };
var convertedNumber = function(userInput) {
if (userInput > 0 && userInput <= 3999) {
  if (userInput === 5) {
    alert(num.five);
  }


}
else {
  alert("Please enter a number from 1 to 3999");
  }
}
