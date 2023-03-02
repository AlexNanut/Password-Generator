// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  // let text; // I added the passworword lenght
  let passwordLenght = prompt("Select the password lenght between 8 and 128 characters");
    
  // and then added a while loop to adress the essential criteria of the password 
  
  while(passwordLenght<8 || passwordLenght>128) {
    passwordLenght= prompt("Select the password lenght between 8 and 128 characters")
  }
  console.log(passwordLenght);
  let useLowerCase= confirm("Do you want to use lowercase digits?")
  let useUpperCase= confirm("Do you want to use upperrcase digits?")
  let useSpecialCharacters= confirm("Do you want to use special characters?")
  let useNumbers= confirm("Do you want to use numbers?")
  console.log(useLowerCase, useUpperCase, useSpecialCharacters, useNumbers)
  let selectableCharacters = ""
  if (useLowerCase) {
    selectableCharacters=selectableCharacters+"abcdefghijklmnopqrstuvwxyz"

  }
  if (useUpperCase) {
    selectableCharacters=selectableCharacters+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  }
  if (useSpecialCharacters) {
    selectableCharacters=selectableCharacters+"!@#$%^&*()"

  }
  if (useNumbers) {
    selectableCharacters+="0123456789"

  }
  console.log(selectableCharacters)
  let password=""
  for (var i =0; i<= passwordLenght; i++) {
    var randomNumber = Math.floor(Math.random() * selectableCharacters.length);
    password += selectableCharacters.charAt (randomNumber);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
