import './css/base.scss';
import {
  userLoginSection,
  logInButton,
  userNameInput,
  passwordInput,
  hotelMotto,
  navBar,
  logInNavLink,
  logOutNavLink,
  mainSection,
  bookingSection,
  checkInDate,
  checkOutDate,
  checkAvailabilityBttn,
  managerMotto,
  managerNavBar,
  managerView,
  managerDataBlock,
  managerDataTitle,
  managerData,
  roomStatusesNavLink,
  hotelStatsSection,
  hotelStatsContainer,
  occupancy,
  revenue,
  searchInput,
  manageBookingsNavLink,
  manageBookingsSection,
  manageBookingsForm
} from './classes/domObject';
import {
  fetchData
} from './classes/fetchData';

import User from './classes/userRepo';
import Manager from './classes/managerRepo';
import Booking from './classes/bookingRepo';
// import './images/audio.m4a';
// audio.play();

let currentUser;
let guest;
let manager = new Manager();
let booking;
let userData = [];
let bookingData = [];
let roomData = [];
let today = new Date().toLocaleDateString();

let userNameBlock = document.querySelector('.user-history');


// --- EVENT LISTENERS: ---
window.addEventListener("load", displayManagerPage);
logInNavLink.addEventListener('click', displayLogIn);
logOutNavLink.addEventListener('click', displayLogIn);
logInButton.addEventListener('click', determineUserInput);
checkAvailabilityBttn.addEventListener('click', checkAvailableRooms);
managerData.addEventListener('click', registerClickEvent);
roomStatusesNavLink.addEventListener('click', displayRoomStatuses);
manageBookingsNavLink.addEventListener('click', displayManageBookings);
searchInput.addEventListener('keyup', searchInputHandler);

// -*-~-*-~-*- LOG IN Functions: -*-~-*-~-*-
function displayLogIn() {
  event.preventDefault();
  hideGuestPage();
  hideManagerPage();
  userLoginSection.classList.remove('hidden');
  hotelMotto.innerText = "";
  hotelMotto.classList.add('hidden');
  navBar.classList.add('hidden');
  mainSection.classList.add('hidden');
  bookingSection.classList.add('hidden');
}

function displayUserError() {
  userNameInput.placeholder = "insert correct credentials";
  passwordInput.placeholder = "insert correct credentials"
}

// function toggleLogNavLink() {
//   logInNavLink.innerText === "Log In" ? logInNavLink.innerText = "Log Out" : logInNavLink.innerText = "Log In"
// }

function displayUserName() {
  hotelMotto.innerText = `Welcome ${guest['name']}`;
}

function matchGuestLogIn(guestName) {
  fetchData.getUserData().then(data => {
      return data.find(user => {
        let clonedInput = `customer${user.id}`;
        if (guestName === clonedInput) {
          Promise.resolve(user)
            .then(user => guest = new User(user))
        }
      })
    })
    .then(data => displayUserName());
}

function determineUserInput() {
  let guestName = userNameInput.value;
  if (userNameInput.value.includes("customer") && passwordInput.value === "overlook2020") {
    matchGuestLogIn(guestName);
    displayGuestPage();
    logInNavLink.innerText = "Log Out"
  } else if (userNameInput.value === "manager" && passwordInput.value === "overlook2020") {
    displayManagerPage();
  } else {
    displayUserError()
  }
}

function clearUserLogIn() {
  userNameInput.value = "";
  passwordInput.value = "";
}

// -*-~-*-~-*- MANAGER Section: -*-~-*-~-*-
function populateRoomData() {
  managerData.innerText = "";
  managerDataTitle.innerText = "";
  managerDataTitle.innerText = "Room Statuses";
  fetchData.getRoomData().then(data => data.forEach(room => {
    managerData.insertAdjacentHTML('beforeend', `
    <article class="data-container room column-alignment" id="${room.number}">
      <a class="room-data" id="room-number"><u>Room #${room.number}</u></a>
      <a class="room-data" id="room-type"><i>${room.roomType}</i></a>
      <a class="room-data" id="bed-size"><b>${room.numBeds}</b> ${room.bedSize}-size bed(s)</a>
      <a class="room-data" id="room-cost">$${room.costPerNight} / night </a>
    </article>
`)
  }));
  calculateTodaysStats();
}

// function collectTodaysOccupancy(){
//
// }
function collectData() {
  fetchData.getBookingData().then(data => {
    return data.forEach(bookingLog => {
      Promise.resolve(data)
        .then(data => bookingData.push(bookingLog))
    })
  });
  fetchData.getRoomData().then(data => {
    return data.forEach(room => {
      Promise.resolve(data)
        .then(data => roomData.push(room))
    })
  });
}

function calculateTodaysStats() {
  collectData();
  console.log(roomData);
  let totalRevenue = manager.totalRevenue(bookingData, roomData, '2020/01/11');
  let totalOccupancy = manager.totalPercentOccupied(bookingData, roomData, '2020/01/11');
  console.log(totalRevenue, totalOccupancy);
}


// -*-~-*-~-*- SEARCH BAR / CUSTOMER HISTORY Functions: -*-~-*-~-*-

function searchInputHandler(e) {
  if (searchInput.value !== undefined && e.key === 'Enter') {
    let searchEntry = searchInput.value;
    let lowerCaseSearch = searchEntry.toLowerCase();
    gatherSearchResults(lowerCaseSearch);
    searchInput.value = "";
  }
}

function gatherSearchResults(searchEntry) {
  // let searchResults = [];
  let lowerCaseSearchEntry = searchEntry.toLowerCase();
  fetchData.getUserData().then(data => {
      return data.filter(user => {
        let userName = `${user['name'].toLowerCase()}`;
        if (userName.includes(lowerCaseSearchEntry)) {
          userData.push(user);
          Promise.resolve(user)
            .then(user => guest = new User(user))
        }
      })
    })
    .then(data => populateCustomerHistory(userData));
  showUserHistory(userData)
}

function populateCustomerHistory(searchResults) {
  clearManagerData();
  let sortedSearchResults = searchResults.sort((a, b) => {
    return a.name > b.name ? 1 : -1
  });
  console.log(sortedSearchResults);
  managerData.innerText = "";
  managerDataTitle.innerText = "Customer History";
  sortedSearchResults.forEach(user => {
    managerData.insertAdjacentHTML('beforeend', `
    <article class="user-history data-container column-alignment" id=${user.id}>
      <a class="user-name">${user.name}</a>
    </article>
    `)
  })
}

function showUserHistory(clickedUser) {
  let userBookings = clickedUser.viewMyBookings(bookingData);
  let userGrandTotal = clickedUser.viewMyTotal(bookingData, roomData);
  console.log(userBookings);
  console.log(userGrandTotal);
}

function registerClickEvent(searchResults) {
  let clickedUserName = event.target.innerText;
  let clickedUser;
  userData.forEach(user => {
    if (user['name'] === clickedUserName) {
      clickedUser = new User(user)
    };
  })
  console.log(clickedUser);
  showUserHistory(clickedUser);
}

// -*-~-*-~-*- MANAGE BOOKINGS SECTION Functions: -*-~-*-~-*-
function displayBookingsForm() {

}

// -*-~-*-~-*- DISPLAY (x) MANAGER SECTION Functions: -*-~-*-~-*-

function clearManagerData() {
  managerData.innerText = "";
  managerDataTitle.innerText = "";
  hotelStatsSection.classList.add('hidden');
}

function displayManageBookings() {
  clearManagerData();
  manageBookingsSection.classList.remove('hidden');
  managerDataTitle.innerText = "";
  managerDataTitle.innerText = "Manage Bookings";
}


function displayRoomStatuses() {
  clearManagerData();
  populateRoomData();
  hotelStatsSection.classList.remove('hidden');
}

function displayManagerPage() {
  // manager = new Manager();
  userLoginSection.classList.add('hidden');
  managerMotto.classList.remove('hidden');
  managerNavBar.classList.remove('hidden');
  managerView.classList.remove('hidden');
  hotelStatsSection.classList.remove('hidden');
  clearUserLogIn();
  hideGuestPage();
  populateRoomData();
}

function hideManagerPage() {
  managerMotto.classList.add('hidden');
  managerNavBar.classList.add('hidden');
  managerView.classList.add('hidden');
  hotelStatsSection.classList.add('hidden');
}



// -*-~-*-~-*- GUEST Section: -*-~-*-~-*-
function displayGuestPage() {
  userLoginSection.classList.add('hidden');
  hotelMotto.classList.remove('hidden');
  navBar.classList.remove('hidden');
  mainSection.classList.remove('hidden');
  bookingSection.classList.remove('hidden');
}

function hideGuestPage() {
  userLoginSection.classList.add('hidden');
  hotelMotto.classList.add('hidden');
  navBar.classList.add('hidden');
  mainSection.classList.add('hidden');
  bookingSection.classList.add('hidden');
}

// -*-~-*-~-*- BOOK A ROOM Functions: -*-~-*-~-*-
function displayAvailableRooms() {

}

function checkAvailableRooms() {
  console.log(checkInDate.value);
  console.log(checkOutDate.value);
  displayAvailableRooms();
}

// function handleAvailableRoomsSection() {
//   checkAvailableRooms();
// }
