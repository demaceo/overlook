import {
  expect
} from 'chai';
import Booking from '../src/classes/bookingRepo';
import {
  bookingMockData,
  roomMockData
} from "./mock-data";

describe('Booking class properties and methods', function() {
  let booking1, booking2, booking3;
  beforeEach(() => {
    booking1 = new Booking(bookingMockData[0]);
    booking2 = new Booking(bookingMockData[1]);
    booking3 = new Booking(bookingMockData[2]);
  })
  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });
  it('should be an instance of Booking', function() {
    expect(booking1).to.be.an.instanceof(Booking);
  });

  it('should have a unique booking id number', function() {
    expect(booking2.id).to.equal("randomID2");
  });

  it('should have a booking date', function() {
    expect(booking3.date).to.equal("2021/04/21");
  });

  it('should have a room number associated with the booking', function() {
    expect(booking1.roomNumber).to.equal(6);
  });

  it('should have an array of room service charges whose default is an empty array', function() {
    expect(booking3.roomServiceCharges).to.deep.equal([]);
  });
})
