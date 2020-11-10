import Booking from './Booking';
import {
  fetchData
} from './fetchData';

export default class User {
  constructor(userData = {}) {
  // constructor(userData) {
    this.id = userData.id || 666;
    this.name = userData.name || 'Manager';
  }

  bookMyRoom(date, roomNumber) {
    let booking = {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    };
    fetchData.createBooking(booking)
  }

  viewMyBookings(bookingData) {
    let myBookings = bookingData.filter(booking => {
      return booking.userID === this.id
    });
    return myBookings.sort((a, b) => {
      return a.date < b.date ? -1 : 1;
    })
  }

  viewMyTotal(bookingData, roomData) {
    let grandTotal = this.viewMyBookings(bookingData).reduce((myGrandTotal, myBooking) => {
      let matchedRoom = roomData.find(room => room.number === myBooking.roomNumber);
      myGrandTotal += matchedRoom.costPerNight
      return myGrandTotal;
    }, 0).toFixed(2);
    return Number(grandTotal)

  }

  viewUnavailableRooms(bookingData, roomData, date) {
    return bookingData.reduce((bookedRooms, booking) => {
      if (booking.date === date) {
        bookedRooms.push(roomData.find(room => room.number === booking.roomNumber))
      }
      return bookedRooms
    }, []);
  }

  viewAvailableRooms(bookingData, roomData, date) {
    let unavailableRooms = this.viewUnavailableRooms(bookingData, roomData, date)
    return roomData.filter(room => !unavailableRooms.includes(room))
  }

  viewAvailableRoomsByType(bookingData, roomData, date, roomType) {
    let availableRooms = this.viewAvailableRooms(bookingData, roomData, date);
    return availableRooms.filter(room => room.roomType === roomType)
  }
}
