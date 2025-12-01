// server.js
const http = require("http");
const app = require("./app");
const initWebSocket = require("./websockets/websocket");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// Initialize WebSocket
initWebSocket(server);

server.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
