/* module imports *************************************************************/
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* middleware *****************************************************************/
// serve static content out of this directory
app.use(express.static("./"));
// parse all requests using the generic body parser (req.body is now available)
app.use(bodyParser());

/* routes *********************************************************************/
app.post("/", function(req, res) {
    // get the email from the request body
    res.send("<p>Your user name is: " + req.body.email + "</p>");
});

// start
app.listen(8000, () => console.log("ready!"));
