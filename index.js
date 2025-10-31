
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const locationRouter = require("./routes/locationRoutes")

app.use("/location", locationRouter)

app.get('/', (req, res) => {
    res.send('Hello, Express Server is running!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
