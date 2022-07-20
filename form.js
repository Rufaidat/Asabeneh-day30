const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telephone = document.getElementById("telephone");
const bio = document.getElementById("bio");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const addError = (element, message) => {
  const inputBox = element.parentElement;
  const warning = inputBox.querySelector(".error");
  warning.textContent = message;
  inputBox.classList.add("error");
  inputBox.classList.remove("correct");
};

const addCorrect = (element) => {
  const inputBox = element.parentElement;
  const warning = inputBox.querySelector(".error");
  warning.textContent = "";
  inputBox.classList.add("correct");
  inputBox.classList.remove("error");
};
function validate() {
  const firstnameValue = firstname.value;
  const lastnameValue = lastname.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const telephoneValue = telephone.value;
  const bioValue = bio.value;

  const nameRegex = /^[a-zA-Z]{3,16}$/gm;
  if (nameRegex.test(firstnameValue) === false) {
    addError(
      firstname,
      "First name must be alphanumeric and contain 3-16 characters"
    );
  } else {
    addCorrect(firstname);
  }

  const name2Regex = /^\w{3,16}$/gm;
  if (name2Regex.test(lastnameValue) === false) {
    addError(
      lastname,
      "last name must be alphanumeric and contain 3-16 characters"
    );
  } else {
    addCorrect(lastname);
  }

  const emailRegex = /^\w*\d?\w*?@\w*.\w*/gm;
  if (emailRegex.test(emailValue) === false) {
    addError(email, "Email must be a valid address, e.g example@example.com");
  } else {
    addCorrect(email);
  }

  const phoneRegex = /^\d{3}-\d{3}-\d{4}/gm;
  if (phoneRegex.test(telephoneValue) === false) {
    addError(telephone, "A valid Telephone number (11 digits and 333-333-3334");
  } else {
    addCorrect(telephone);
  }

  const bioRegex = /(^[a-z]*'?.?_?[a-z]*,?.?'?_?[a-z]*.?){3,50}$/gm;
  if (bioRegex.test(bioValue) === false) {
    addError(
      bio,
      "Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters"
    );
  } else {
    addCorrect(bio);
  }

  const passwordRegex = /^([a-z]?\d?@?.?-?_?\w*?,?-?_?){6,20}$/gm;
  if (passwordRegex.test(passwordValue) === false) {
    addError(
      password,
      "Password must be alphanumeric (@,_ and - are also allowed) and between 6-20 characters"
    );
  } else {
    addCorrect(password);
  }
}
