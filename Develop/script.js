// Assignment Code

var lowerCaseString = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"]
var upperCaseString = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "_", "-", "?", "<", ">"]

var userChoices = [];

var generateBtn = document.querySelector("#generate");


function generatePassword(){
var passLength = prompt ("Please choose how many characters you'd like in your password, between 8 and 128 characters");
if ((passLength > 7) && (passLength < 129)) {
} else {
  (passLength = prompt("Please try again"))
}
var lowerPassword = confirm("Would you like lower case characters?");
if (lowerPassword) {
  userChoices = userChoices.concat(lowerCaseString)
}
var upperPassword = confirm("Would you like upper case characters?")
if (upperPassword) {
  userChoices = userChoices.concat(upperCaseString)
}
var numericPassword = confirm("Would you like numbers in the password?")
if (numericPassword) {
  userChoices = userChoices.concat(numeric)
}
var specialPassword = confirm("Would you like special characters in your password?")
if (specialPassword) {
  userChoices = userChoices.concat(specialCharacter)
}



if (!lowerPassword && !upperPassword && !numericPassword && !specialPassword)  {prompt ("You must choose at least one requirement.");
   }

   let finalPassword = ""
for (let i =0; i < passLength; i++) {
  let randIndex = Math.floor(Math.random()* userChoices.length)
  let randCharacter = userChoices[randIndex];
  finalPassword = finalPassword.concat(randCharacter)
}
   
   
return finalPassword


};







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
