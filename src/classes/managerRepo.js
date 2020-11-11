import Booking from './bookingRepo';
import User from './userRepo';
import {
  fetchData
} from './fetchData';

export default class Manager extends User {
  constructor(userData) {
    super(userData)
  }
  totalAvailableRooms(bookingData, roomData, date) {
    return this.viewAvailableRooms(bookingData, roomData, date).length
  }

  totalRevenue(bookingData, roomData, date) {
    return this.viewUnavailableRooms(bookingData, roomData, date).reduce((totalRevenue, room) => {
      totalRevenue += room.costPerNight;
      return totalRevenue
      }, 0).toFixed(2)
  }

  totalPercentOccupied(bookingData, roomData, date) {
    return (this.viewUnavailableRooms(bookingData, roomData, date).length /
      roomData.length).toFixed(2)
  }

  viewCustomer(userData, name) {
    return new User(userData.find(user => user.name === name))
  }

  viewCustomerInfo(bookingData, roomData, userData, name) {
    let customer = this.viewCustomer(userData, name);
    let bookings = customer.viewMyBookings(bookingData);
    let total = customer.viewMyTotal(bookingData, roomData);
    return {
      id: customer.id,
      name: customer.name,
      bookingHistory: bookings,
      totalSpent: total
    }
  }

  addCustomerBooking(userData, name, date, roomNumber) {
    let customer = this.viewCustomer(userData, name);
    return customer.bookMyRoom(date, roomNumber);
  }

  deleteCustomerBooking(bookingData, bookingID) {
    let matchedBooking = bookingData.find(booking => booking.id === bookingID);
    if (matchedBooking.date > this.getDate()) {
      let booking = {
        "id": bookingID
      }
      fetchData.deleteBooking(booking);
    } else {
      return `Cannot delete bookings on or before today\'s date: ${this.date}`
    }
  }

  getDate() {
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
}
