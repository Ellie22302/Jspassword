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

//Prompts for the password
function getPrompts(){
    choiceArray = [];

    characterLength= parseInt(prompt("How many characters do you want in your secure password 8-128?"))

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
        alert("Character has to be a number and within 8 - 128");
        return false;
    }
    if (confirm("Would you like Lowercase?")){
        choiceArray = choiceArray.concat(lowerCase);
    }
    if (confirm("Would you like Uppercase?")){
        choiceArray = choiceArray.concat(upperCase);
    }
    if (confirm("Would you like Special Characters?")){
        choiceArray = choiceArray.concat(specialChar);
    }
    if (confirm("Would you like Numbers?")){
        choiceArray = choiceArray.concat(numbersArray);
    }
    return true;
}