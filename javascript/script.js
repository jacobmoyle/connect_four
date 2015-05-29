/*
*******************Player Functionality*********************************

array = [[],[],[],[],[],[],[]]

determine if array is full = length of the array is not equal to 6

if it's not full, then drop a chip = so if player playing is 1, then drop 1 and if it's player 2, then drop 2

player 1 function - if player 1 clicks on 1 of the columns, we need to pull that column identifier i.e. A, B, C, etc.

player 2 function - if player 2 clicks on 1 of the columns, we need to pull that column identifier i.e. A, B, C, etc.

*********************************************************************************





*/
// chipDrop("player1", a)
var array = [
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0]
            ]



var columnCheck = function (index) {
  return array[index].length != 6 ? true : false;
}

var getColumnid = function(column){
  switch (column){
    case "a":
      return 0;
    case "b":
      return 1;
    case "c":
      return 2;
    case "d":
      return 3;
    case "e":
      return 4;
    case "f":
      return 5;
    case "g":
      return 6;
  }
}

//FOR THE FOLLOWING FUNCTION:
//need to toggle between player 1 and 2

var chipDrop = function(player, column) {


  var index = getColumnid(column)
  if (columnCheck(index)){
    if (player == "player1"){
      array[index].push(1)
    } else {
      array[index].push(2)
    }
  } else {

  }

  // See winCheck below
  // winCheck()
}

// create a check win function:
//  calls horizontal, vertical and diagonal win functions
// This is called after every player 'turn' that is divisible by a prime number

var horizontalWin = function(array, index) {
  for(i=0; i<array.length; i++){
    var tempArray = []
    tempArray.push(array[i][index])

  }
}



var verticalWin = function(array, index){
  var temp_string = ""
  for(i=0; i < array.length; i++){
    array[i].toString;
  }

}

// var winCheck = function() {
  // if any of the below, return true or something
  // all button functionality stops, etc.
//   verticalWin();
//   horizontalWin();
//   diagonalWin();
// }

chipDrop("player1", "a")
// console.log(array);
// console.log(chipDrop("player1", "a"));
// array[1].push(2)
// console.log(array);
// console.log(array[1]);
