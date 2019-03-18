
// Declaring express
const express = require("express");
var dotenv = require('dotenv');
// Other dependencies
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
mongoose.set('useCreateIndex', true);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// IAN NEEDS TO REPLACE MONGODB DB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
