const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

import User from '../src/classes/user';
import Manager from '../src/classes/manager';
import Booking from '../src/classes/booking';
import {
  fetchData
} from '../src/classes/fetchData';
import {
  userMockData,
  bookingMockData,
  roomMockData
} from "./mock-data";

describe.skip('Manager class properties and methods', function() {
  let manager, bookingData, roomData, userData;
  chai.spy.on(fetchData, ['createBooking', 'deleteBooking'], () => {});

  beforeEach(() => {
    bookingData = bookingMockData;
    roomData = roomMockData;
    userData = userMockData;
    manager = new Manager();
  });

  it('should be a function', function() {
    expect(Manager).to.be.a('function');
  });

  it('should be an instance of Manager', function() {
    expect(manager).to.be.an.instanceof(Manager);
  });

  it('should have an id number of 666', function() {
    expect(manager.id).to.equal(666);
  });

  it('should have a name', function() {
    expect(manager.name).to.equal('Manager');
  });

  it('should show total rooms available by date', function() {
    expect(manager.totalAvailableRooms(bookingData, roomData, "2022/04/21")).to.equal(4);
  });

  it('should return total revenue from today\'s bookings', function() {
    expect(manager.totalRevenue(bookingData, roomData, "2021/01/01")).to.equal(1000.44);
  });

  it('should return percent of occupied rooms for given date', function() {
    expect(manager.totalPercentOccupied(bookingData, roomData, "2021/01/01")).to.equal((.50).toFixed(2));
  });

  it('should be able to find a User class object by name', function() {
    expect(manager.viewCustomer(userData, "Doodle Bob")).to.deep.equal(userData[0]);
    expect(manager.viewCustomer(userData, "Doodle Bob")).to.be.an.instanceof(User);
  });

  it('should be able to view user\'s bookings and total spent', function() {
    expect(manager.viewCustomerInfo(bookingData, roomData, userData, "Doodle Bob").totalSpent).to.equal(3200.88);
    expect(manager.viewCustomerInfo(bookingData, roomData, userData, "Doodle Bob").bookingHistory[0].id).to.equal('randomID1');
  });

  it('should be able to book a room for a user', function() {
    manager.addCustomerBooking(userData, "Doodle Bob", "2020/02/03", 1);
    expect(apiRequest.createBooking).to.have.been.called(1);
    expect(apiRequest.createBooking).to.have.been.called.with({
      "userID": 55,
      "date": "2020/02/03",
      "roomNumber": 1
    });
  });

  it('should be able to delete a booking for a user', function() {
    manager.deleteCustomerBooking(bookingData, 'randomID3');
    expect(apiRequest.deleteBooking).to.have.been.called(1);
    expect(apiRequest.deleteBooking).to.have.been.called.with({
      "id": 'randomID3'
    });
  });

  it('should not be able to delete a booking in the past or today', function() {
    manager.deleteCustomerBooking(bookingData, "randomID1")
    expect(apiRequest.deleteBooking).to.have.been.called(0);
  });

})
