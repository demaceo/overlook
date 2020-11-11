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
let today = new Date().toLocaleDateString();



// --- EVENT LISTENERS: ---
//window.addEventListener("load", displayManagerPage);
logInNavLink.addEventListener('click', displayLogIn);
logOutNavLink.addEventListener('click', displayLogIn);
logInButton.addEventListener('click', determineUserInput);
checkAvailabilityBttn.addEventListener('click', checkAvailableRooms);

roomStatusesNavLink.addEventListener('click', displayRoomStatuses);
manageBookingsNavLink.addEventListener('click', displayManageBookings);
searchInput.addEventListener('keyup', searchInputHandler);

// -*-~-*-~-*- LOG IN Functions: -*-~-*-~-*-
function displayLogIn() {
  event.preventDefault();
  hideGuestPage();
  hideManagerPage();
  userLoginSection.classList.remove('hidden');
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
  hotelMotto.innerText = "";
  hotelMotto.innerText = `Welcome ${currentUser['name']}`;
}

function matchGuestLogIn(guestName) {
  fetchData.getUserData().then(data => {
      return data.find(user => {
        let clonedInput = `customer${user.id}`;
        if (guestName === clonedInput) {
          Promise.resolve(user)
            .then(user => currentUser = new User(user))
        }
      })
    })
    .then(data => displayUserName());
}

function determineUserInput() {
  let guestName = userNameInput.value;
  if (userNameInput.value.includes("customer") && passwordInput.value === "overlook2020") { //"customer" + number/userId
    matchGuestLogIn(guestName);
    displayGuestPage();
    logInNavLink.innerText = "Log Out"
  } else if (userNameInput.value === "manager" && passwordInput.value === "overlook2020") {
    user = new Manager();
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
  // calculateHotelStats();
}

function calculateHotelStats() {
  // let userData = [];
  // let bookingData = [];
  // let roomData = [];
  // fetchData.getBookingData().then(data => {
  //   return bookingData.push(...data)
  // });
  // fetchData.getUserData().then(data => {
  //   return userData.push(...data)
  // });
  // fetchData.getRoomData().then(data => {
  //   return roomData.push(...data)
  // });
  // revenue.innerText = manager.totalRevenue(today);
}


// -*-~-*-~-*- SEARCH BAR / CUSTOMER HISTORY Functions: -*-~-*-~-*-

function searchInputHandler(e) {
  let searchEntry;
  if (searchInput.value !== undefined && e.key === 'Enter') {
    searchEntry = searchInput.value;
    console.log("searchEntry", searchEntry);
    if (searchEntry.length !== 0) {
      // displaySearchResults();
      gatherSearchResults(searchEntry);
      searchInput.value = "";
    } else {
      console.log(searchInput.value);
    }
  }
}


function gatherSearchResults(searchEntry) {
  let userSearchResult = [];
  let capitalizeInput = searchEntry[0].toUpperCase() + searchEntry.substring(1);
  fetchData.getUserData().then(data => console.log(data));
  fetchData.getUserData().then(data => data.filter(user => {
    //return user === capitalizeInput))
    // if (user.name.includes(capitalizeInput)) {
    if (user.name === searchEntry) {
      console.log(user);
      userSearchResults.push(user);
      console.log(userSearchResult);
      return populateCustomerHistory(userSearchResults);
    }
  }))
};

function populateCustomerHistory(userSearchResults) {
  clearManagerData();
  managerData.innerText = "";
  managerDataTitle.innerText = "";
  managerDataTitle.innerText = "Customer History";
  //fetchData.getUserData().then(data => data.forEach(user => {
  userSearchResults.forEach(user => {
    roomStatuses.insertAdjacentHTML('beforeend', `
    <article class="user column-alignment" id="${user.id}">
      <a class="user-name">${user.name}</a>
    </article>
    <tr>
      <td>${user.name}</td>
    </tr>
    <tr>
      <td></td>
    </tr>
    <tr>
      <td></td>
    </tr>
    `)
  })
}

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
