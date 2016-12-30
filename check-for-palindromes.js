function palindrome(str) {
  //These two lines of code are needed to ensure the string can be checked whether it is a palindrome or not.
  var removeThings = str.replace(/[^0-9a-z]/gi, ''); //You can't just put "/W" here b/c you need to also eliminate "_"
  var lowerCase = removeThings.toLowerCase();
  //These three lines of code are needed to reverse the string
  var cutUp = lowerCase.split("");
  var flipAround = cutUp.reverse();
  var palindrome = flipAround.join('');
  //This final if statement determines whether the string is a palindrome or not
  if (lowerCase === palindrome){
    return true;
  } else {
    return false;
  }
  
  
}



palindrome("eye"); //This will test the function to make sure the code works. The console should return "True"

//*Other strings you can try to make sure the code works*

//palindrome("_eye")|should return true.

//palindrome("race car")|should return true.

//palindrome("not a palindrome")|should return false.

//palindrome("A man, a plan, a canal. Panama")|should return true.

//palindrome("never odd or even")|should return true.

//palindrome("nope")|should return false.

//palindrome("almostomla")|should return false.

//palindrome("My age is 0, 0 si ega ym.")|should return true.

//palindrome("1 eye for of 1 eye.")|should return false.

//palindrome("0_0 (: /-\ :) 0-0")|should return true.

//palindrome("five|\_/|four")|should return false.

