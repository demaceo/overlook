const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

import {
  fetchData
} from '../src/classes/fetchData';
import User from '../src/classes/userRepo';
import Manager from '../src/classes/managerRepo';
import {
  userMockData,
  roomMockData,
  bookingMockData
} from "./mock-data";

describe.only('Manager class properties and methods', function() {
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
    let x = manager.totalAvailableRooms(bookingData, roomData, "2022/04/21");
    expect(x).to.equal(4);
  });

  it('should return total revenue from today\'s bookings', function() {
    expect(manager.totalRevenue(bookingData, roomData, "2021/01/01")).to.equal('200.11');
  });

  it('should return percent of occupied rooms for given date', function() {
    let x = manager.totalPercentOccupied(bookingData, roomData, "2021/01/01");
    expect(x).to.equal((.25).toFixed(2));
  });

  it('should be able to find a User class object by name', function() {
    expect(manager.viewCustomer(userData, "Doodle Bob")).to.deep.equal(userData[0]);
    expect(manager.viewCustomer(userData, "Doodle Bob")).to.be.an.instanceof(User);
  });

  it('should be able to view user\'s bookings and total spent', function() {
    expect(manager.viewCustomerInfo(bookingData, roomData, userData, "Doodle Bob").totalSpent).to.equal(923.57);
    expect(manager.viewCustomerInfo(bookingData, roomData, userData, "Doodle Bob").bookingHistory[0].id).to.equal('randomID1');
  });

  it('should be able to book a room for a user', function() {
    manager.addCustomerBooking(userData, "Doodle Bob", "2020/02/03", 1);
    expect(fetchData.createBooking).to.have.been.called(1);
    expect(fetchData.createBooking).to.have.been.called.with({
      "userID": 20,
      "date": "2020/02/03",
      "roomNumber": 1
    });
  });

  it.skip('should be able to delete a booking for a user', function() {
    manager.deleteCustomerBooking(bookingData, 'randomID3');
    expect(fetchData.deleteBooking()).to.have.been.called(1);
    expect(fetchData.deleteBooking()).to.have.been.called.with({
      "id": 'randomID3'
    });
  });  
  //recently relocated the getDate method (from the manager class to index.js) that these last two tests are referencing

  it.skip('should not be able to delete a booking in the past or today', function() {
    manager.deleteCustomerBooking(bookingData, "randomID1")
    expect(fetchData.deleteBooking).to.have.been.called(0);
  });
})
