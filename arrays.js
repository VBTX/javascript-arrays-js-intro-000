


var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];
var candyString = "foo";


function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
function removeElementFromEndOfArray(){
  var colors = ['black', 'blue', 'grey', 'red'];
  colors.slice(0, colors.length -1);
  return colors;
}
