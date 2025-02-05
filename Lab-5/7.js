const EventManagement = require('./6.js');

const eventManagement = new EventManagement();

eventManagement.on('start', () => {
    console.log("Event started");
});

eventManagement.on('inprogress', () => {
    console.log("Event is in progress");
});

eventManagement.on('completed', () => {
    console.log("Event completed");
});

eventManagement.start();
eventManagement.inprogress()
eventManagement.completed()