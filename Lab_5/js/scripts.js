function togglePassword(isPassword) {
  function toggleInput(inputId, inputTogglerId) {
    const input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";

    const inputToggler = document.getElementById(inputTogglerId);
    inputToggler.classList.toggle("eye-hidden");
    inputToggler.classList.toggle("eye-shown");
  }

  if (isPassword) {
    toggleInput("password", "password-toggler");
  } else {
    toggleInput("confrim", "confrim-toggler");
  }
}
