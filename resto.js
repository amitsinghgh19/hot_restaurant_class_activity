
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");
const path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

var waitingArray = [
  {
    customerName: " ",
    customerEmail: " ",
    phoneNumber: " ",
    customerID: " "
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitingArray;

var tableArray = [
  {
    customerName: " ",
    customerEmail: " ",
    customerID: " ",
    phoneNumber: " "
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;