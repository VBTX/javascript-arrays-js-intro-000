


var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];
var candyString = "foo";


function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
function removeElementFromEndOfArray(){
  var numbers = [1,2];
  numbers.slice(0, numbers.length -1);
  return numbers;
}
var numbers = [ 1, 2, 3];
function destructivelyRemoveElementFromEndOfArray(numbers){
    numbers.pop();
    return numbers;
}
var numbers = [ 1, 2, 3];
function removeElementFromBeginningOfArray(){
  numbers.slice();
  return numbers;
}
var numbers = [ 1, 2, 3];
function destructivelyRemoveElementFromBeginningOfArray(){
  numbers.shift();
  return numbers;
}
