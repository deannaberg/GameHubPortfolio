const form = document.querySelector("#contactForm");
const yourName = document.querySelector("#name");
const yourNameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
 
function validateForm(event) {
   event.preventDefault();
 
   if (checkLength(yourName.value, 0) === true) {
       yourNameError.style.display = "none";
   } else {
       yourNameError.style.display = "block";
   }
 
   if (validateEmail(email.value, 0) === true) {
       emailError.style.display = "none";
   } else {
       emailError.style.display = "block";
   }
 
   if (checkLength(message.value, 0) === true) {
       messageError.style.display = "none";
   } else {
      messageError.style.display = "block";
   }
}
form.addEventListener("submit", validateForm);
 
function checkLength(value, len) {
   if (value.trim().length > len) {
       return true;
   } else {
       return false;
   }
}
 
function validateEmail(email) {
   const regEx = /\S+@\S+\.\S+/;
   const patternMatches = regEx.test(email);
   return patternMatches;
}




for (let i = 0; i <= 101; i++){
    let output = ""
    if (i % 3 == 0) output+= "fizz";
    if (i % 5 == 0) output += "buzz";
     console.log (output || i);
}

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }