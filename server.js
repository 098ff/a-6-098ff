const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");

dotenv.config({path: './config/config.env'});
const app = express();

connectDB();

const hospitals = require("./routes/hospitals");
const auth = require("./routes/auth");

app.use(`/api/v1/hospitals`, hospitals);
app.use(`/api/v1/auth`, auth);

// Use || 5000 for running in window
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Unhandled Rejection at: ${promise}, reason: ${err}`);
    server.close(() => process.exit(1));
});