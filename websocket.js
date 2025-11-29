// websocket.js
const WebSocket = require("ws");

function initWebSocket(server) {
    const wss = new WebSocket.Server({ server });

    wss.on("connection", (ws) => {
        console.log("new websocket client connected");

        ws.send("You are now connected to the server");

        ws.on("message", (message) => {
            console.log("Received from client:", message);
            ws.send("Received Your message");
        });
    });

    return wss;
}

module.exports = initWebSocket;
