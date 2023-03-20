const mongoose = require('mongoose');
require('dotenv'). config()

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://tstarkw:JXbbQ8S8mSzRjle3@tessacluster.hocfryr.mongodb.net/pplus", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;