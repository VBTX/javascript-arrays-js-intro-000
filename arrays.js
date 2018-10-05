


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
function destructivelyRemoveElementFromEndOfArray(){
    var numbers = [ 1, 2];
    numbers.pop();
    return numbers;
}
