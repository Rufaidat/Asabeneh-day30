const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telephone = document.getElementById("telephone");
const bio = document.getElementById("bio");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Validite();
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
  inputBox.classList.add(".correct");
  inputBox.classList.remove(".error");
};
function Validite() {
  const firstnameValue = firstname.value;
  const lastnameValue = lastname.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const telephoneValue = telephone.value;
  const bioValue = bio.value;

  if (firstnameValue.length < 3 || firstnameValue.length > 16) {
    addError(firstname, "required");
  } else {
    addCorrect(firstname);
  }
}
