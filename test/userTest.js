import {
  expect
} from 'chai';
import User from '../src/classes/userRepo';
import Booking from '../src/classes/bookingRepo';
import {
  fetchData
} from '../src/classes/fetchData';

import {
  userMockData,
  bookingMockData,
  roomMockData
} from "./mock-data";

describe('User class properties and methods', function() {
  let user1, user2, user3;
  let bookingData;
  let roomData;

  beforeEach(() => {
    bookingData = bookingMockData;
    roomData = roomMockData;
    user1 = new User(userMockData[0]);
    user2 = new User(userMockData[1]);
    user3 = new User(userMockData[2])
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user1).to.be.an.instanceof(User);
  });

  it('should have a default id number of 666 if none is provided', function() {
    expect(user3.id).to.equal(666);
  });

  it('should have an id number', function() {
    expect(user1.id).to.equal(20);
  });

  it('should have a default name Manager if none is provided', function() {
    expect(user3.name).to.equal('Manager');
  });

  it('should have a name', function() {
    expect(user1.name).to.equal('Doodle Bob');
  });

  it('should return array of bookings sorted by most recent date', function() {
    expect(user1.viewMyBookings(bookingData)[0].date).to.equal('2019/04/20');
    expect(user1.viewMyBookings(bookingData)[3].date).to.equal('2021/04/21');
  });

  it('should return total spent on all room bookings', function() {
    // console.log(user1.viewMyTotal(bookingData, roomData));
    expect(user1.viewMyTotal(bookingData, roomData)).to.equal(923.55);
  });

  it('should be able to find unavailable rooms by date', function() {
    user1 = new User(userMockData[1]);
    expect(user1.viewUnavailableRooms(bookingData, roomData, "2021/02/06").length).to.equal(2);
  });

  it('should be able to find available rooms by date', function() {
    let x = user1.viewAvailableRooms(bookingData, roomData, "2021/02/06").length;
    expect(x).to.equal(2);
    expect(user1.viewAvailableRooms(bookingData, roomData, "2021/02/06")[0]).to.deep.equal(roomMockData[1]);
  });

  it('should be able to filter available rooms by type of room', function() {
    let x = user1.viewAvailableRoomsByType(bookingData, roomData, "2021/02/06", 'junior suite')[0].roomType;
    let z = user1.viewAvailableRoomsByType(bookingData, roomData, "2021/02/06", 'junior suite').length;
    expect(x).to.equal('junior suite');
    expect(z).to.equal(1);
  });

  it('should be able to book a room', function() {
    user1.bookMyRoom("2020/02/03", 1);
    expect(fetchData.createBooking).to.have.been.called(1);
  });
});
