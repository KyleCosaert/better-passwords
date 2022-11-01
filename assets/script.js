// Assignment code here

// Genorator Functions
function lowerLetterGen() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperLetterGen() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function numberGen() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function symbolGen() {
  var sym = '!@#$%&*-_=+?/.,;:[]{}'
  return sym[Math.floor(Math.random() * sym.length)];
}

// main function for password generator 
function generatePassword() {
  var length = prompt("How many characters would you like your password to be? (Minimum 8, Maximum 128)");

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("The amount of characters for the password must be between 8 and 128.");
    return "";
  } else {
      var confirmupper = confirm("Would you like uppercase letters in you password?");
      var confirmlower = confirm("Would you like lowercase letters in you password?");
      var confirmnumber = confirm("Would you like numbers in you password?");
      var confirmsymbol = confirm("Would you like symbols in you password?");
      var genPassword = "";

      for (var i = 0; i < length; i++) {
        var password = "";

        if (confirmnumber) {
        password += numberGen();
        }

        if (confirmlower) {
        password += lowerLetterGen();
        }

        if (confirmupper) {
        password += upperLetterGen();
        }

        if (confirmsymbol) {
        password += symbolGen();
        }

        if (confirmupper == false && confirmlower == false && confirmsymbol == false && confirmnumber == false){
          alert("You must choose at least one character type for your generated password.");
          return "";
        }
          var ranNumber = Math.floor(Math.random() * password.length);
          genPassword = genPassword + password[ranNumber];
      }
    return genPassword;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (password == "") {
    return;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
