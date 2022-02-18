// entry point to the server
const express = require("express");
// config load .env content into process.env
const colors = require("colors");
const dotenv = require("dotenv").config();
// importing custom error handler
const { errorHandler } = require("./middleware/errorMiddleware");

// db connection configuration
const connectDB = require("./config/db");
// getting the port from environment
const PORT = process.env.PORT;

// init express server
const app = express();
// running the db connection
connectDB();

// middleware to accept incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/******************************** 
routes
****************************/
// if route reaches the end point it will redirect to the goalRoutes under directory routes
app.use("/api/goals", require("./routes/goalRoutes"));

// custom error handler which will override the default error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
