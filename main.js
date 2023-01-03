const ErrorMessages = {
  firstname: "First name must be alphanumeric and contain 3 - 16 characters",
  lastname: "Last name must be alphanumeric and contain 3 - 16 characters",
  email: "Email must be a valid address, e.g example@example.com",
  password:
    "Password must be alphanumeric (@,_ and - are also allowed) and between 6 - 20 characters",
  telephone: "A valid Telephone number (11 digits and 333-333-3334)",
  bio: "Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters",
};

//Selectors
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const telephone = document.querySelector("#telephone");
const bio = document.querySelector("#bio");
const button = document.querySelector("#submit");
const input = document.querySelectorAll("input");
//err selectors
const firstErr = document.querySelector(".firstErr");
const lastErr = document.querySelector(".lastErr");
const emailErr = document.querySelector(".emailErr");
const passErr = document.querySelector(".passErr");
const teleErr = document.querySelector(".teleErr");
const bioErr = document.querySelector(".bioErr");
//##

//Eventlistener
// for alphanumeric=/[A-Za-z]+[0-9]{3,16}/buh its only working when 2 numbers are present
button.addEventListener("click", () => {
  //fpr firstname
  if (firstname.value.match(/^[A-Za-z0-9]{3,16}/)) {
    firstErr.textContent = "";
    firstname.style.border = "2px solid #4ccc4c";
  } else {
    firstErr.textContent = "";
    firstErr.textContent = ErrorMessages.firstname;
    firstname.style.border = "2px solid #ffa917";
  }

  //for lastname
  if (lastname.value.match(/^[A-Za-z0-9]{3,16}/)) {
    lastErr.textContent = "";
    lastname.style.border = "2px solid #4ccc4c";
  } else {
    lastErr.textContent = "";
    lastErr.textContent = ErrorMessages.lastname;
    lastname.style.border = "2px solid #ffa917";
  }

  //for email
  if (email.value.match(/[A-Za-z0-9]+@[A-Za-z]+.com/)) {
    emailErr.textContent = "";
    email.style.border = "2px solid #4ccc4c";
  } else {
    emailErr.textContent = "";
    emailErr.textContent = ErrorMessages.email;
    email.style.border = "2px solid #ffa917";
  }

  //for password
  if (password.value.match(/[A-Za-z]+[0-9]+[@-_]{6,20}/)) {
    passErr.textContent = "";
    password.style.border = "2px solid #4ccc4c";
  } else {
    passErr.textContent = "";
    passErr.textContent = ErrorMessages.password;
    password.style.border = "2px solid #ffa917";
  }

  //for telephone
  //   /^\d{3}-\d{3}-\d{4}$/
  //   /\d{3}+-\d{3}+-\d{4}/
  //   /\d{3}[-]\d{3}[-]\d{4}/
  //   /\d{3}[-]+\d{3}[-]+\d{4}/
  if (telephone.value.match(/^\d{3}-\d{3}-\d{4}$/)) {
    teleErr.textContent = "";
    telephone.style.border = "2px solid #4ccc4c";
  } else {
    teleErr.textContent = "";
    teleErr.textContent = ErrorMessages.telephone;
    telephone.style.border = "2px solid #ffa917";
  }

  //for bio
  if (bio.value.match(/[a-z]|[a-z_-]{8,50}/)) {
    bioErr.textContent = "";
    bio.style.border = "2px solid #4ccc4c";
  } else {
    bioErr.textContent = "";
    bioErr.textContent = ErrorMessages.bio;
    bio.style.border = "2px solid #ffa917";
  }

  //for button
  if (
    firstname.value.match(/[A-Za-z0-9]{3,16}/) &&
    lastname.value.match(/[A-Za-z0-9]{3,16}/) &&
    email.value.match(/[A-Za-z0-9]+@[A-Za-z]+.com/) &&
    password.value.match(/[A-Za-z0-9@-_]{6,20}/) &&
    telephone.value.match(/^\d{3}-\d{3}-\d{4}$/) &&
    bio.value.match(/[a-z]|[a-z_-]{8,50}/)
  ) {
    button.style.background = "#4ccc4c";
  }
});
