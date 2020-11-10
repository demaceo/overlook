// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';
// import './images/palmys.jpg';
// import 'audio.m4a';
import {
  fetchData
} from './classes/fetchData';

// console.log('This is the JavaScript entry file - your code begins here.');
// console.log(fetchData.getUserData());
// console.log(fetchData.getRoomData());
// use .then to resolve the Promise
// let userData = fetchData.getUserData().then(data => console.log("userData", data));

// need to import your SCSS files in the JavaScript entry file (index.js)
//for the styles to be applied to your HTML.
//The example base.scss file has already been imported
//in the JavaScript entry file as an example.


// --- QUERY SELECTORS ---
let userLoginSection = document.querySelector('.user-login-section');
let logInButton = document.querySelector('.login-button');
let userNameInput = document.querySelector('#user-name');
let passwordInput = document.querySelector('#password');

// let audio = new Audio('audio.m4a');
let hotelMotto = document.querySelector('.motto');
let navBar = document.querySelector('.nav-bar');
let logInNavLink = document.querySelector('.log-in-link');
let mainSection = document.querySelector('.main-section');

let bookingSection = document.querySelector('.booking-section');
let checkInDate = document.querySelector('input[id="check-in"]');
let checkOutDate = document.querySelector('input[id="check-out"]');
let checkAvailabilityBttn = document.querySelector('.check-availability-button');

let managerMotto = document.querySelector('.manager-motto');
let managerNavBar = document.querySelector('.manager-nav-bar');
let managerView = document.querySelector('.manager-view');
let roomStatusView = document.querySelector('.room-statuses-view');
let roomStatusesSection = document.querySelector('.room-statuses-block');
let roomStatuses = document.querySelector('.room-statuses');
let hotelDataSection = document.querySelector('.hotel-data-section');
let occupancy = document.querySelector('#occupancy');
let revenue = document.querySelector('#revenue');
// let customerHistoryView = document.querySelector('.customer-history-view');
// let customerHistorySection = document.querySelector('.customer-history-block');
// let searchUsersInput = document.querySelector('.search-input');


// --- EVENT LISTENERS ---
window.addEventListener("load", displayManagerPage);
logInNavLink.addEventListener('click', displayLogIn);
logInButton.addEventListener('click', determineUserInput);
checkAvailabilityBttn.addEventListener('click', handleAvailableRoomsSection);

// --- FUNCTIONS SECTION ---


// ~*~*~ LOG-IN Functions ~*~*~
function displayLogIn() {
  event.preventDefault();
  userLoginSection.classList.remove('hidden');
  hotelMotto.classList.add('hidden');
  navBar.classList.add('hidden');
  mainSection.classList.add('hidden');
  bookingSection.classList.add('hidden');
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

function displayUserError() {

}

function clearUserLogIn() {
  userNameInput.value = "";
  passwordInput.value = "";
}

function displayUserName(userName) {
  hotelMotto.innerText = "";
  hotelMotel.insertAdjacentHTML('afterbegin', `
  <i>Welcome ${userName}</i>
  `)
}


// ~*~*~ MANAGER Functions ~*~*~

function displayManagerPage() {
  userLoginSection.classList.add('hidden');
  managerMotto.classList.remove('hidden');
  managerNavBar.classList.remove('hidden');
  managerView.classList.remove('hidden');
  hotelDataSection.classList.remove('hidden');
  clearUserLogIn();
  hideGuestPage();
  populateRoomData();
  // bookingSection.classList.remove('hidden');
}

function populateRoomData() {
  roomStatuses.innerText = "";
  // let roomData = fetchData.getRoomData().then(data => data));
      //  <a class="room-data" id="bed-count">${room.numBeds} bed(s)</a>
  fetchData.getRoomData().then(data => data.forEach(room => {
    roomStatuses.insertAdjacentHTML('beforeend', `
      <article class="room column-alignment" id="${room.number}">
        <a class="room-data" id="room-number"><u>Room #${room.number}</u></a>
        <a class="room-data" id="room-type"><i>${room.roomType}</i></a>
        <a class="room-data" id="bed-size"><b>${room.numBeds}</b> ${room.bedSize}-size bed(s)</a>
        <a class="room-data" id="room-cost">$${room.costPerNight} / night </a>
      </article>
      `)
  }));
}

function displayAvailableRooms() {

}

function hideRoomStatusesSection() {
  roomStatusView.classList.add('hidden');
  hotelDataSection.classList.add('hidden');
}

// ~*~*~ GUEST Functions ~*~*~
function displayGuestPage() {
  userLoginSection.classList.add('hidden');
  hotelMotto.classList.remove('hidden');
  navBar.classList.remove('hidden');
  mainSection.classList.remove('hidden');
  bookingSection.classList.remove('hidden');
  // audio.play();
}

function hideGuestPage() {
  userLoginSection.classList.add('hidden');
  hotelMotto.classList.add('hidden');
  navBar.classList.add('hidden');
  mainSection.classList.add('hidden');
  bookingSection.classList.add('hidden');
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
