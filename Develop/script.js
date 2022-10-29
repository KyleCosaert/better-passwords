// Assignment code here

//dom element 
var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

var randomFunction = {
  lower: lowerLetterGen,
  upper: upperLetterGen,
  number: numberGen,
  symbol: symbolGen
};

// generate event listen
generateEl.addEventListener('click', () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = lowercaseEl.checked;
  var hasNumber = lowercaseEl.checked;
  var hasSymbol = lowercaseEl.checked;

  resultEl.innerText.generatepassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
  );
})

// password gen fuctions 
function writePassword(lower, upper, number, symbol, length) {
  let generatePassword = '';
  var typesCount = lower + upper + number + symbol;
  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );
  
  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatePassword += randomFunc[funcName]();
    });
  }
}



//Genorator Functions
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
