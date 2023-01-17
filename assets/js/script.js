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



//This function will generate the password based on what is given in the prompts
//had to look at the R,P,S acitivity for this one and a video on for loops and random generation because it was a bit confusing for me
//--------------------------------------------------------------------------------------------------------------------------------------------------//
function generatePassword() {
  var genPass = "";
  console.log(genPass)
  //this will loop each individual character from the passOptions and give a random character per index, until the loop of i is the same as the length chosen.
  for(var i = 0; i < passLength; i++) {
    //The Math random is going to give a random letter, number or special character based on the length of the pass chosen
    var ranChar = Math.floor(Math.random() * passOptions.length);
    //the gen password is going to keep adding characters 1 by one per loop. 
    genPass = genPass + passOptions[ranChar];
  }

  return genPass;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------//



//Function for the Prompts
//--------------------------------------------------------------------------------------------------------------------------------------------------//
function getPrompts() {
  passLength = (window.prompt("Choose a password length between 8-128 characters:"))
  console.log(passLength)
  //isNaN is making sure what is entered is a number and then its making sure that number isn't less than 8 or greater than 128
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("please choose between 8-128")
    //closes the window when the wrong number is chosen after alerting the user that the number must be between 1-128
    //if it failed to meet the criteria, it reverts passLength to 0 and creates the options to 0 to avoid creating an "Undefined" value
    passLength = 0
    passOptions = [];
    return;
  }
  //adding confirm windows creates a true or false scenario where its either a yes or no situation.
  if (confirm("Add lowercase letters?")){
    //concat is concatinate and its combining the choices into the passOptions array
    //added console.log to see how each option is combined as user goes through each prompt
    passOptions = passOptions.concat(lwrCaseChar);
    console.log(passOptions)
  }

  if (confirm("Add uppercase letters?")){
    passOptions = passOptions.concat(uppCaseChar);
    console.log(passOptions)
  }

  if (confirm("Add Special Characters?")){
    passOptions = passOptions.concat(spcCharacters);
    console.log(passOptions)
  }

  if (confirm("Add numbers?")){
    passOptions = passOptions.concat(nmbCharacters);
    console.log(passOptions)
  }
  return;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------//



