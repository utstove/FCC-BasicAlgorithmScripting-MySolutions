function factorialize(num) {
  var array = [];//The array is contained in this variable
  for (var i = 1; i < num + 1; i++) {
    array.push(i);//This for loop pushes all numbers >= num into the array
}
  num = array.reduce(function(prevVal,curVal){//Variable num is set to a  function which multiplies all the numbers in the array.
    return prevVal*curVal;
  },1);
  return num;
}

factorialize(5); //We now test the function using the number 5. This command will return 120, thus factorializing the number 5.
