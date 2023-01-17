// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//added the getPrompt function
function writePassword() {
  getPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//Added Code for Assignment//
//--------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------//


//Variables for each prompt
//--------------------------------------------------------------------------------------------------------------------------------------------------//
//Special Characters
var spcCharacters = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `_`, `=`, `+`, `?`, `<`, `>`, `[`, `]`, `.`];
//Numbered Characters
var nmbCharacters = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
//Lowercase Characters
var lwrCaseChar   = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
//UpperCase Characters
var uppCaseChar   = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `R`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];

//Variables for the password prompts
// the [] indicates empty variables that will be filled in 
var passLength = [];
console.log(passLength);
var passOptions = [];
//--------------------------------------------------------------------------------------------------------------------------------------------------//





