const {
    locationStream,
    addPoint,
    removeEntry
} = require("../services/locationStreamSaveService")

exports.handleConnection = (ws) => {
    console.log("new websocket client connected");

    ws.send("You are now connected to the server");

    ws.on("message", (message) => {
        ws.send("Received Your message");
        const json = JSON.parse(message);


        if (json.action == "locationStream") {
            addPoint(json.email, json.lat, json.lang);
            ws.send(JSON.stringify(locationStream['badwaikparas@gmail.com']?.polyline || []));
        }
        if (json.action == "stoplocationStream") {
            removeEntry(json.email);
            ws.send(JSON.stringify(locationStream['badwaikparas@gmail.com']?.polyline || []));
        }
    });
}