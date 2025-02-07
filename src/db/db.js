const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.DB_URL);
    console.log("[Mongoose] Connected");
  } catch (err) {
    console.log(`[Mongoose] Failed -> ${err}`);
    process.exit(1);
  }
};

module.exports = { connectDB };
