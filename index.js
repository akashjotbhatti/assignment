const express = require('express');
const app = express();
const port = 3000;
let data = require("./data.json");

function getInfo(req, res) {
    let response = {Information: data};
    res.send(response);
}

app.get("/", getInfo);
   
function appStart() {
    console.log("Listening at " + port);
}

app.listen(port, appStart);