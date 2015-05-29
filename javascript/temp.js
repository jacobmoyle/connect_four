var array = [
              [1,0,0,0,0,0],
              [0,1,0,0,0,0],
              [1,0,1,0,0,1],
              [0,0,0,1,0,0],
              [0,0,0,0,1,0],
              [0,0,0,0,0,1],
              [1,1,0,0,0,0]
            ];


var verticalWin = function(array, index){
  var temp_string = "";

  for(i=0; i < array.length; i++){
  temp_string += String(array[index][i]);

  };
  return temp_string;
};
console.log("fuck");

console.log(verticalWin(array, 2))
// console.log(verticalWin(array, 2));
