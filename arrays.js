
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(){
  const colors = ['black', 'blue', 'grey'];
  const addition = ['red', ...colors];
}


function destructivelyAddElementToBeginningOfArray(){
  var colors = ['black', 'blue', 'grey'];
  colors.unshift('red');
}

function addElementToEndOfArray(){
  const colors = ['black', 'blue', 'grey'];
  const addition = [..colors, 'red'];
}
function destructivelyAddElementToEndOfArray(){
  var colors = ['black', 'blue', 'grey'];
  colors.push('red');
}

function iKnow(){
  var things = ['everything', 'nothing', 'something'];
  things[1];
}

function destructivelyRemoveElementFromBeginningOfArray(){
  const colors = ['black', 'blue', 'grey', 'red'];
  colors.shift();
  colors;
}

function removeElementFromBeginningOfArray(){
  var colors = ['black', 'blue', 'grey', 'red'];
  colors.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(){
    var colors = ['black', 'blue', 'grey', 'red'];
    colors.pop();
    colors;
}
function removeElementFromEndOfArray(){
  var colors = ['black', 'blue', 'grey', 'red'];
  colors.slice(0, colors.length-1);
  colors;
}
