function validate(element) {
  let statusText = document.querySelector("#status");
  let password = document.querySelector("#password")  
  let confirmPassword = document.querySelector("#confirm-password")
  console.table({password:password.value,confirmPassword:confirmPassword.value})

  if (confirmPassword.value.length > 0 && password.value !== confirmPassword.value) {
      if (password.value.length >= 6) {
        password.setCustomValidity("Passwords do not match");
        statusText.hidden=false;
      }
      confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
    statusText.hidden=true;
  }
}