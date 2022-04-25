//set up Mongoose to connect when app is started
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/social",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);
