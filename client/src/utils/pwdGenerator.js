
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

// optionsArray: special-char, num-char, low-char, up-char
// length: len
// var pwdLen = storeLength(len)
// // function to store length
// function storeLength(len) {
//     return len
// }

// function to get random elements of an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

// function to get password options
function generatePwd(optionsArray, len) {
    var chars = [];
    for (let i = 0; i < optionsArray.length; i++) {
        if (optionsArray[i] === "special-char") {
            chars = chars.concat(specialCharacters)
        }
        if (optionsArray[i] === "num-char") {
            chars = chars.concat(numericCharacters)
        }
        if (optionsArray[i] === "low-char") {
            chars = chars.concat(lowerCasedCharacters)
        }
        if (optionsArray[i] === "up-char") {
            chars = chars.concat(upperCasedCharacters)
        }
    }
    console.log(chars);
    let pass = ""

    for (let i = 0; i < len; i++) {
        pass += getRandom(chars)
    }
    console.log(pass)
    return pass
}

export {generatePwd}
