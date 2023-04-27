const logInForm = document.querySelector("form");
const logInInput = logInForm.querySelector(":first-child");
const logInSubmit = logInForm.querySelector(":last-child");
const showID = document.querySelector("#showID");


const storageItemName = "userID";


function loadUserName() {
  showID.innerText = `Hello ${localStorage.getItem(storageItemName)}~`;
}

function handleLogInSubmit(event) {
  event.preventDefault();
  localStorage.setItem(storageItemName, logInInput.value);
  loadUserName();
  logInForm.classList.add("hidden");
  showID.classList.remove("hidden");

}
logInForm.addEventListener("submit", handleLogInSubmit);


if (localStorage.getItem(storageItemName) === null) {
  logInForm.classList.remove("hidden");
} else {
  showID.classList.remove("hidden");
  loadUserName();


}