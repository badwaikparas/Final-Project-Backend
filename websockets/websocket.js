// websocket.js
const WebSocket = require("ws");

const { handleConnection } = require("./controllers/websocketController")
function initWebSocket(server) {
    const wss = new WebSocket.Server({ server });

    wss.on("connection", handleConnection);

    return wss;
}

module.exports = initWebSocket;
