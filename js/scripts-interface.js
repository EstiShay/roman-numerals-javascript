// user interface logic
var conversion = require('./../js/scripts.js').convertModule;

$(document).ready(function(){
  $("form#romanForm").submit(function(event){
     event.preventDefault();
     var number = parseInt($("#userInput").val());
     conversion(number);
  });
});
