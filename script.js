const errors = document.querySelectorAll(".error");
const inputBoxes = document.querySelectorAll(".input-box");
const errorIcons = document.querySelectorAll(".input-box img");

const submitFc = (event, form) => {
  event.preventDefault();
  const nameIsValid = nameValidation(form.name.value.trim());
  const lastNameISvalid = lastNameValidation(form.surname.value.trim());
  const emailIsValid = emailValidation(form.email.value.trim());
  const passwordIsValid = passwordValidation(form.password.value);

  if (nameIsValid && lastNameISvalid && emailIsValid && passwordIsValid) {
    console.log("form is submitted!");
  }
};

function nameValidation(string) {
  if (string === "") {
    inputBoxes[0].style.borderColor = "#ff7979";
    errors[0].textContent = "First Name cannot be empty";
    errorIcons[0].style.display = "block";
    return false;
  }
  return true;
}

function lastNameValidation(string) {
  if (string === "") {
    inputBoxes[1].style.borderColor = "#ff7979";
    errors[1].textContent = "Last Name cannot be empty";
    errorIcons[1].style.display = "block";
    return false;
  }
  return true;
}

function emailValidation(email) {
  if (email === "") {
    inputBoxes[2].style.borderColor = "#ff7979";
    errors[2].textContent = "email cannot be empty";
    errorIcons[2].style.display = "block";
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    inputBoxes[2].style.borderColor = "#ff7979";
    errors[2].textContent = "Looks like this is not an email";
    errorIcons[2].style.display = "block";
    return false;
  }
  return true;
}

function passwordValidation(string) {
  if (string === "") {
    inputBoxes[3].style.borderColor = "#ff7979";
    errors[3].textContent = "Password cannot be empty";
    errorIcons[3].style.display = "block";
    return false;
  }
  return true;
}

const removeErrors = (index) => {
  inputBoxes[index].style.borderColor = "#5E54A4";
  errors[index].textContent = "";
  errorIcons[index].style.display = "none";
};

const setBluBorder = (index, input) => {
  let inputIsValid;
  if (index === 0) {
    inputIsValid = nameValidation(input.value.trim());
  } else if (index === 1) {
    inputIsValid = lastNameValidation(input.value.trim());
  } else if (index === 2) {
    inputIsValid = emailValidation(input.value.trim());
  } else {
    inputIsValid = passwordValidation(input.value.trim());
  }
  if (inputIsValid) {
    inputBoxes[index].style.borderColor = "#dedede";
  } else {
    inputBoxes[index].style.borderColor = "#ff7979";
  }
};
