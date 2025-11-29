// services/locationService.js

const MAX_QUEUE_SIZE = 10;
let locationQueue = [];

function addToQueue(newLocation) {
    locationQueue.push(newLocation);
    if (locationQueue.length > MAX_QUEUE_SIZE) {
        locationQueue.shift();
    }
}

function getLatestLocation() {
    if (locationQueue.length === 0) return null;
    return locationQueue;
}

function getAllLocations() {
    return locationQueue;
}

module.exports = {
    addToQueue,
    getLatestLocation,
    getAllLocations
};
