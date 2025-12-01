// app.js
const express = require("express");
const cors = require("cors");

const locationRouter = require("./apis/routes/locationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/location", locationRouter);

app.get("/", (req, res) => {
    res.send("Hello, Express Server is running!");
});

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the API!" });
});

module.exports = app;
