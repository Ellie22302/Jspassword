// Assignment Code
//Arrays for future code

var characterLength = 8;

var choiceArray =[];

var specialChar = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];

var lowerCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbersArray=['1','2','3','4','5','6','7','8','9','0'];

//  Write password to the #password input

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);