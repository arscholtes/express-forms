const express = require("express");
const bodyParser = require("body-parser");
console.log(bodyParser);

const app = express();

app.use(express.static("./"));
app.use(bodyParser());

app.post("/", (req, res) => {
    const email = req.body.email;
    res.send(
        "<p>Your user name is: " + email + "</p>"
    );
});

app.listen(8000, () => console.log("ready!"));
