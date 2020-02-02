// Express module.
const express = require('express');

// Authentication module.
const auth = require('http-auth');
const authConnect = require('../src/index');

const basic = auth.basic({
    realm: "Simon Area.",
    file: __dirname + "/../data/users.htpasswd" // gevorg:gpass, Sarah:testpass
});

// Application setup.
const app = express();
app.use(authConnect(basic));

// Setup route.
app.get('/', (req, res) => {
  res.send(`Hello from express - ${req.user}!`);
});

// Start server.
app.listen(1337, () => {
    // Log URL.
    console.log("Server running at http://127.0.0.1:1337/");
});