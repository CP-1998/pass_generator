// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let length = parseInt(prompt('Choose a length between 8 - 128'))
  let upper = confirm('Do you want uppercase?')
  let lower = confirm('Do you want lowercase?')
  let nums = confirm('Do you want numbers?')
  let special = confirm('Do you want special?')
  let upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
  let lowerChar = "qwertyuiopasdfghjklzxcvbnm"
  let numsChar = "1234567890"
  let specialChar = "!@#$%^&*()_+=<>?/|`~"

  if (length < 129 || length > 7) {
    let newPass = ""
    let newPassChar = ""
    if (upper) {
      newPassChar += upperChar
    }
    if (lower) {
      newPassChar += lowerChar
    }
    if (nums) {
      newPassChar += numsChar
    }
    if (special) {
      newPassChar += specialChar
    }
    console.log(newPassChar)
    for (let i = 0; i < length; i++) {
      let newChar = newPassChar[Math.floor(Math.random() * newPassChar.length)]
      newPass += newChar

    }
    return newPass
    console.log(generatePassword)

  } else {
    alert("INVALID LENGTH")
  }




}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
