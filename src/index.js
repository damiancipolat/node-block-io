const http = require("http");
const express = require("express");
const environment = require("dotenv").config();
const config = require("./config");
const bodyParser = require("body-parser");

//Define routes and events
const routes = require("./routes");

const { server: { port } } = config;

//Start Express-js.
const app = express();
const server = http.createServer(app);

//Add middlewars.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Middleware token verified
app.use('/', routes);

//Start listen mode.
app.listen(port, async () => {
  console.log(`> Listening ${port}`);
});