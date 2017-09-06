// user interfsce logic
$(document).ready(function(){
  $("form#romanForm").submit(function(event){
     event.preventDefault();
     var number = parseInt($("#userInput").val());
     convertedNumber(number);
  });
});
