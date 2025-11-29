// routes/locationRoutes.js

const express = require("express");
const router = express.Router();

const {
    addLocation,
    getLocation,
    getAllLocations
} = require("../controllers/locationController");

router.post("/addLocation", addLocation);
router.get("/getLocation", getLocation);
router.get("/getAllLocations", getAllLocations);

module.exports = router;
