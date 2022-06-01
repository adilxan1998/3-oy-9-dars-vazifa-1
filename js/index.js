const number = [1, 3, 5, 9];

const calcNum = function(numArr){
  var yigindi = 0;

  for(let num of numArr){
    yigindi += num;
  }

  return yigindi;
}

console.log(calcNum(number));