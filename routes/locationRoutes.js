const express = require('express');
const router = express.Router();

let location = {
    // latitude: 50, longitude: 100
};


router.post('/addLocation', (req, res) => {
    const data = req.body;
    location = data;
    console.log(JSON.stringify(location));
    res.send("✅ SOS location was set");
});


router.get('/getLocation', (req, res) => {
    console.log("Sent location " + JSON.stringify(location))
    if (location) {
        res.json(location);
    } else {
        res.status(404).json({ message: "No location set" });
    }
});

module.exports = router;
