// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
function passval() {
let str=document.querySelector("input").value
  if (str.length >= 8) {
    console.log("Length valid");
    if (/[A-Z]/.test(str) && /[a-z]/.test(str)) {
      console.log("Letters valid");
      if (/[0-9]/.test(str)) {
        console.log("Digit valid");
       let result = document.getElementById("result")
        return result.textContent="Password is valid!";
      }
    }
  }
  else
  return result.textContent="Password is invalid!";
  
}