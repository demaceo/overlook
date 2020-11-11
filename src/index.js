import './css/base.scss';
import {
  userLoginSection,
  logInButton,
  userNameInput,
  passwordInput,
  hotelMotto,
  navBar,
  logInNavLink,
  homeNavLink,
  logOutNavLink,
  bookRoomNavLink,
  mainSection,
  bookingSection,
  checkInDate,
  checkOutDate,
  checkAvailabilityBttn,
  deleteBookingBttn,
  deleteBookingSection,
  deleteBookingInput,
  managerMotto,
  managerNavBar,
  managerView,
  managerDataBlock,
  managerDataTitle,
  managerData,
  roomStatusesNavLink,
  hotelStatsSection,
  hotelStatsContainer,
  dataTitle,
  availableRooms,
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
let clickedUser;
let guest;
let manager = new Manager();
let booking;
let userData = [];
let bookingData = [];
let roomData = [];
let today = getDate();
let selectDate;

let userNameBlock = document.querySelector('.user-history');


// --- EVENT LISTENERS: ---
window.addEventListener("load", calculateTodaysStats);
homeNavLink.addEventListener('click', displayGuestPage);
logInNavLink.addEventListener('click', displayLogIn);
logOutNavLink.addEventListener('click', displayLogIn);
logInButton.addEventListener('click', determineUserInput);
checkAvailabilityBttn.addEventListener('click', checkAvailableRooms);
managerData.addEventListener('click', registerClickEvent);
managerData.addEventListener('click', registerClickedRoom);
roomStatusesNavLink.addEventListener('click', displayRoomStatuses);
manageBookingsNavLink.addEventListener('click', displayManageBookings);
searchInput.addEventListener('keyup', searchInputHandler);
deleteBookingBttn.addEventListener('click', deleteBooking);
bookRoomNavLink.addEventListener('click', displayUserBookRoom);


// -*-~-*-~-*- LOG IN Functions: -*-~-*-~-*-
function displayLogIn() {
  event.preventDefault();
  hideGuestPage();
  hideManagerPage();
  clearUserLogIn();
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
  managerDataTitle.innerText = "Room Details";
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

function getDate() {
  let newDate = new Date();
  let month = newDate.getMonth() + 1;
  let date = newDate.getDate();
  if (date.toString().length < 2) {
    date = '0' + date
  }
  if (month.toString().length < 2) {
    month = '0' + month
  }
  return `${newDate.getFullYear()}/${month}/${date}`
}

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
  let totalAvailableRooms = manager.totalAvailableRooms(bookingData, roomData, "2020/11/11");
  let totalRevenue = manager.totalRevenue(bookingData, roomData, "2020/11/11");
  let totalOccupancy = manager.totalPercentOccupied(bookingData, roomData, "2020/11/11");
  dataTitle.innerText = `${today} Stats:`;
  availableRooms.innerText = `${totalAvailableRooms}`;
  occupancy.innerText = `%${totalOccupancy}`;
  revenue.innerText = `$${totalRevenue}`;
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
  userData = [];
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
  registerClickEvent(userData)
}

function populateCustomerHistory(searchResults) {
  clearManagerData();
  let sortedSearchResults = searchResults.sort((a, b) => {
    return a.name > b.name ? 1 : -1
  });
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

function displayUserHistory(clickedUser, grandTotal, bookingDates) {
  managerData.innerText = "";
  managerDataTitle.innerText = `${clickedUser['name']}'s History`;
  managerData.classList.remove('row-alignment');
  managerData.classList.add('column-alignment');
  managerData.insertAdjacentHTML('beforeend', `
  <article class="clickedUser-grandTotal">Total Amount Spent: $${grandTotal}</article>
  `);
  bookingDates.forEach(date => {
    managerData.insertAdjacentHTML('beforeend', `
  <article class="clickedUser-booking">${date}</article>
  `)
  })
}

function collectUserHistory(clickedUser) {
  let userBookings = clickedUser.viewMyBookings(bookingData);
  let userGrandTotal = clickedUser.viewMyTotal(bookingData, roomData);
  let bookingDates = userBookings.map(booking => {
    return booking['date']
  });
  displayUserHistory(clickedUser, userGrandTotal, bookingDates);
}

function registerClickEvent(searchResults) {
  let clickedUserName = event.target.innerText;
  userData.forEach(user => {
    if (user['name'] === clickedUserName) {
      clickedUser = new User(user)
      return collectUserHistory(clickedUser);
    }
  })
}

// -*-~-*-~-*- BOOKINGS SECTION Functions: -*-~-*-~-*-


// -*-~-*-~-*- DISPLAY (x)MANAGER SECTION Functions: -*-~-*-~-*-

function clearManagerData() {
  managerData.innerText = "";
  managerDataTitle.innerText = "";
  hotelStatsSection.classList.add('hidden');
  managerData.classList.add('row-alignment');
  managerData.classList.remove('column-alignment');
}

function displayManageBookings() {
  clearManagerData();
  manageBookingsSection.classList.remove('hidden');
  managerDataTitle.innerText = "";
  managerDataTitle.innerText = "Manage Bookings";
  bookingSection.classList.remove('hidden');
}

function displayRoomStatuses() {
  clearManagerData();
  populateRoomData();
  hotelStatsSection.classList.remove('hidden');
}

function displayManagerPage() {
  userLoginSection.classList.add('hidden');
  managerMotto.classList.remove('hidden');
  managerNavBar.classList.remove('hidden');
  managerView.classList.remove('hidden');
  hotelStatsSection.classList.remove('hidden');
  deleteBookingSection.classList.remove('hidden');
  clearUserLogIn();
  hideGuestPage();
  populateRoomData();
}

function hideManagerPage() {
  managerMotto.classList.add('hidden');
  managerNavBar.classList.add('hidden');
  managerView.classList.add('hidden');
  hotelStatsSection.classList.add('hidden');
  deleteBookingSection.classList.add('hidden');
}

// -*-~-*-~-*- GUEST Section: -*-~-*-~-*-
function displayGuestPage() {
  userLoginSection.classList.add('hidden');
  hotelMotto.classList.remove('hidden');
  navBar.classList.remove('hidden');
  mainSection.classList.remove('hidden');
  bookingSection.classList.remove('hidden');
  managerView.classList.add('hidden')
}

function hideGuestPage() {
  userLoginSection.classList.add('hidden');
  hotelMotto.classList.add('hidden');
  navBar.classList.add('hidden');
  mainSection.classList.add('hidden');
  bookingSection.classList.add('hidden');
}

function displayUserBookRoom() {
  mainSection.classList.add('hidden');
  managerView.classList.remove('hidden');
  hotelStatsSection.classList.add('hidden');
}

// -*-~-*-~-*- BOOK A ROOM Functions: -*-~-*-~-*-
function registerClickedRoom() {
  let roomNumber = event.target.id;
  let matchedRoom = roomData.find(room => room.number === roomNumber);
  bookRoom(roomNumber)
}


function bookRoom(roomNumber) {
  let chosenUser = clickedUser || guest;
  if (chosenUser && selectDate && roomNumber) {
    fetchData.createBooking({
      userID: chosenUser.id,
      date: selectDate,
      roomNumber: roomNumber
    })
  }
}

function deleteBooking() {
  let inputValue = Number(deleteBookingInput.value);
  fetchData.deleteBooking({
    id: inputValue
  });
  deleteBookingInput.value = ""
}

function displayAvailableRooms(date) {
  let availableRooms = manager.viewAvailableRooms(bookingData, roomData, date);
  managerData.innerHTML = "";
  availableRooms.forEach(room => {
    managerData.insertAdjacentHTML('beforeend', `
    <article class="data-container room column-alignment" id=${room.number}>
      <a class="room-data room-number" id=${room.number}>Room #${room.number}</a>
      <a class="room-data" id=${room.number}>${room.roomType}</a>
      <a class="room-data" id=${room.number}>${room.numBeds} ${room.bedSize}-size bed(s)</a>
      <a class="room-data room-cost" id=${room.number}>$${room.costPerNight} / night </a>
    </article>
    `)
  });
}

function checkAvailableRooms() {
  // if (logOutNavLink.innerText === "Log Out" || logInNavLink.innerText === "Log Out") {
    mainSection.classList.add('hidden');
    managerView.classList.remove('hidden');
    hotelStatsSection.classList.add('hidden');
    selectDate = checkInDate.value.replaceAll('-', '/');
    if (selectDate >= today) {
      displayAvailableRooms(selectDate)
    // }
  }
}

// function handleAvailableRoomsSection() {
//   checkAvailableRooms();
// }
