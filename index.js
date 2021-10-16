const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.get('/javascript', (req, res) => {
    res.sendFile(__dirname + "/public/javascript.html");
});

app.get('/json', (req, res) => {
    res.sendFile(__dirname + "/public/json.html");
});

app.get('/npm', (req, res) => {
    res.sendFile(__dirname + "/public/npm.html");
});

app.get('/nodejs', (req, res) => {
    res.sendFile(__dirname + "/public/nodejs.html");
});

app.get('/express', (req, res) => {
    res.sendFile(__dirname + "/public/express.html");
});

app.get('/restapi', (req, res) => {
    res.sendFile(__dirname + "/public/restapi.html");
});


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});