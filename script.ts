const newPassword = document.querySelector("#newPassword") as HTMLInputElement;
const lastPassword = document.querySelector(
  "#lastPassword"
) as HTMLInputElement;
const lengthBox = document.querySelector("#numberBox") as HTMLInputElement;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}:?/.,";
const allMix = upperCase + lowerCase + numbers + symbols;
let copiedPassword: string = "";
let password = "";

function generatePassowrd() {
  copiedPassword = password;
  lastPassword.value = copiedPassword;
  password = "";
  const passLength = Number(lengthBox.value);

  if (!isNaN || passLength >= 4) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < passLength) {
      password += allMix[Math.floor(Math.random() * allMix.length)];
    }
    newPassword.value = password;
  } else {
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
