export const userMockData = [
  {
    id: 20,
    name: "Doodle Bob"
  },

  {
    id: 70,
    name: "Lord Farquad"
  },
  {
    id: "",
    name: ""
  }
];

export const bookingMockData = [

  {
    id: "randomID1",
    userID: 20,
    date: "2019/04/20",
    roomNumber: 6,
    roomServiceCharges: []
  },

  {
    id: "randomID2",
    userID: 20,
    date: "2021/01/01",
    roomNumber: 2,
    roomServiceCharges: []
  },

  {
    id: "randomID3",
    userID: 20,
    date: "2021/04/21",
    roomNumber: 1,
    roomServiceCharges: []
  },

  {
    id: "randomID4",
    userID: 20,
    date: "2021/01/12",
    roomNumber: 2,
    roomServiceCharges: []
  },

  {
    id: "randomID5",
    userID: 70,
    date: "2021/10/13",
    roomNumber: 9,
    roomServiceCharges: []
  },

  {
    id: "randomID6",
    userID: 70,
    date: "2021/01/02",
    roomNumber: 9,
    roomServiceCharges: []
  },

  {
    id: "randomID7",
    userID: 70,
    date: "2021/02/06",
    roomNumber: 6,
    roomServiceCharges: []
  },

  {
    id: "randomID7",
    userID: 15,
    date: "2021/02/06",
    roomNumber: 1,
    roomServiceCharges: []
  },

  {
    id: "randomID7",
    userID: 15,
    date: "2021/03/14",
    roomNumber: 1,
    roomServiceCharges: []
  }
];

export const roomMockData = [
  {
    number: 6,
    roomType: "residential suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 350.75
  },
  {
    number: 9,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 270.00
  },
  {
    number: 1,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 172.6
  },
  {
    number: 2,
    roomType: "suite",
    bidet: true,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 200.11
  },
];
