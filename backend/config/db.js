const mongoose = require("mongoose");

const connectDB = async (db, options) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connect: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    // exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
