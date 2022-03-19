const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://pooja:pooja@cluster0.wrxi5.mongodb.net/schedule"
  );
};
