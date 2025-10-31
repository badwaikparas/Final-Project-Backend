const express = require('express');
const router = express.Router();

// ---- Editable max size ----
const MAX_QUEUE_SIZE = 10;

// ---- Queue to store locations ----
let locationQueue = [];


function addToQueue(newLocation) {
    locationQueue.push(newLocation);

    // Remove oldest if exceeded max size
    if (locationQueue.length > MAX_QUEUE_SIZE) {
        locationQueue.shift();
    }
}

/**
 * Returns the latest or all locations depending on your use-case.
 * Here: latest.
 */
function getLatestLocation() {
    if (locationQueue.length === 0) return null;
    return locationQueue;
}


// ✅ Add new location
router.post('/addLocation', (req, res) => {
    const data = req.body;

    if (!data || !data.latitude || !data.longitude) {
        return res.status(400).send("❌ Invalid location");
    }

    addToQueue(data);

    console.log("Queue:", JSON.stringify(locationQueue));
    res.send("✅ Location added to queue");
});


// ✅ Get latest location (or return whole queue)
router.get('/getLocation', (req, res) => {
    const latest = getLatestLocation();

    if (!latest) {
        return res.json([]);
    }

    console.log("Sent:", latest);
    res.json(latest);
});


// ✅ Optional: return full queue
router.get('/getAllLocations', (req, res) => {
    res.json(locationQueue);
});

module.exports = router;
