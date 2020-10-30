// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let crit1 = prompt('How long would you like your password to be?(8-128): ')
  let crit2 = prompt('Lower or Uppercase?(L/U): ')
  let crit3 = prompt('Numerics? (Y/N): ')
  let crit4 = prompt('Special Characters? (Y/N): ')

  let list1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'Y', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let list2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let list3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  let list4 = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', '{', ']', '}', ':', ';', '<', ',', '.', '/', '?'];




  let critR1 = parseInt(crit1, 10);
  for (let i = 0; i < critR1; i++) {

    if (crit2 === 'L') {
      
    }
  }




  let password = ""
  }




    passwordText.value = password;

  let passwordText = document.querySelector("#password");



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
