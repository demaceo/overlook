export const fetchData = {

  getUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.log(error, "Encountered an error with getUserData"));
  },
  getRoomData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => data.roomData)
      .catch(error => console.log(error, "Encountered an error with getRoomData"));
  },

  getBookingData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => data.bookingData)
      .catch(error => console.log(error, "Encountered an error with getBookingData"));
  },

  createBooking(booking) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking),
      })
      .then(response => response.json())
      .then(response => console.log("Booking successfully CREATED"))
      .catch(error => console.log(error, "Encountered an error with createBooking"))
  },

  deleteBooking(booking) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking),
      })
      .then(response => response.json())
      .then(response => console.log("Booking successfully DELETED"))
      .catch(error => console.log(error, "Encountered an error with deleteBooking"))
  }
};
