(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// user interface logic
var conversion = require('./../js/scripts.js').convertModule;

$(document).ready(function(){
  $("form#romanForm").submit(function(event){
     event.preventDefault();
     var number = parseInt($("#userInput").val());
     conversion(number);
  });
});

},{"./../js/scripts.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
