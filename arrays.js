


var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];
var candyString = "foo";


function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
function removeElementFromEndOfArray(numbers){
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
function removeElementFromBeginningOfArray(numbers){
  numbers = numbers.slice(1);
  return numbers;
}
var numbers = [ 1, 2, 3];
function destructivelyRemoveElementFromBeginningOfArray(numbers){
  numbers.shift();
  return numbers;
}
var things = [ 1, 2, 3];
function accessElementInArray(things, index){
  return (things[2]);
}
var what = [1];
function destructivelyAddElementToEndOfArray(what){
  return (what.push('foo'));
}
