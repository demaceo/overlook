// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';
// import './images/palmys.jpg';
import {
  fetchData
} from './classes/fetchData';
console.log('This is the JavaScript entry file - your code begins here.');
console.log(fetchData.getUserData())
// use .then to resolve the Promise

fetchData.getUserData().then(data => console.log(data))
// need to import your SCSS files in the JavaScript entry file (index.js)
//for the styles to be applied to your HTML.
//The example base.scss file has already been imported
//in the JavaScript entry file as an example.


// --- QUERY SELECTORS ---
let userLoginSection = document.querySelector('.user-login-section');
let logInButton = document.querySelector('.login-button');
let userNameInput = document.querySelector('#user-name');
let passwordInput = document.querySelector('#password');

let hotelMotto = document.querySelector('.motto');
let navBar = document.querySelector('.nav-bar');
let mainSection = document.querySelector('.main-section');

let bookingSection = document.querySelector('.booking-section');
let checkInDate = document.querySelector('input[id="check-in"]');
let checkOutDate = document.querySelector('input[id="check-out"]');
let checkAvailabilityBttn = document.querySelector('.check-availability-button');

// --- EVENT LISTENERS ---
logInButton.addEventListener('click', determineUserInput);
checkAvailabilityBttn.addEventListener('click', handleAvailableRoomsSection);

// --- FUNCTIONS ---


function displayUserError() {

}

function displayManagerPage() {

}

function displayGuestPage() {
  userLoginSection.classList.add('hidden');
  hotelMotto.classList.remove('hidden');
  navBar.classList.remove('hidden');
  mainSection.classList.remove('hidden');
  bookingSection.classList.remove('hidden');
}

function determineUserInput() {
  if (userNameInput.value.includes("customer") && passwordInput.value === "overlook2020") { //"customer" + number/userId
    // setTimeout(displayGuestPage, 1000);
    displayGuestPage();
  } else if (userNameInput.value === "manager" && passwordInput.value === "overlook2020") {
    displayManagerPage();
  } else {
    displayUserError()
  }
}



function displayAvailableRooms() {

}

function checkAvailableRooms() {
  console.log(checkInDate.value);
  console.log(checkOutDate.value);
  displayAvailableRooms();
}

function handleAvailableRoomsSection() {
  // setTimeout(checkAvaialbleRooms, 3000);
  checkAvailableRooms();

}
