var newPassword = document.querySelector("#newPassword");
var lastPassword = document.querySelector("#lastPassword");
var lengthBox = document.querySelector("#numberBox");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+{}:?/.,";
var allMix = upperCase + lowerCase + numbers + symbols;
var copiedPassword = "";
var password = "";
function generatePassowrd() {
    copiedPassword = password;
    lastPassword.value = copiedPassword;
    password = "";
    var passLength = Number(lengthBox.value);
    if (!isNaN || passLength >= 4) {
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];
        while (password.length < passLength) {
            password += allMix[Math.floor(Math.random() * allMix.length)];
        }
        newPassword.value = password;
    }
    else {
        alert("Length Must Be Greater than 4 and must be a number");
    }
}
function copyNew() {
    newPassword.select();
    document.execCommand("copy");
}
function copyOld() {
    lastPassword.select();
    document.execCommand("copy");
}
