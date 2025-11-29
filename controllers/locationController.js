// controllers/locationController.js

const {
    addToQueue,
    getLatestLocation,
    getAllLocations
} = require("../services/locationService");

exports.addLocation = (req, res) => {
    const data = req.body;

    if (!data || !data.latitude || !data.longitude) {
        return res.status(400).send("❌ Invalid location");
    }

    addToQueue(data);

    console.log("Queue:", JSON.stringify(getAllLocations()));
    res.send("✅ Location added to queue");
};

exports.getLocation = (req, res) => {
    const latest = getLatestLocation();
    if (!latest) return res.json([]);
    console.log("Sent:", latest);
    res.json(latest);
};

exports.getAllLocations = (req, res) => {
    res.json(getAllLocations());
};

