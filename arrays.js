


var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];
var candyString = "foo";


function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}

function addElementToBeginningOfArray(array, element){
  var try = [1, 2, 3, 4];
  try = [element,...try];
}
