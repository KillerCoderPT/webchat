// Packages
require("dotenv").config();
const path = require("path");
const express = require("express");
const http = require("http");

const sockets = require("./controllers/sockets");

const app = express();
const server = http.createServer(app);

sockets(server);

app.use(express.static(path.join(__dirname, "../..", "frontend")));

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../..", "frontend/dashboard.html"));
});

server.listen(process.env.EXPRESS_PORT, () => {
  console.log(
    `Server listening at http://localhost:${process.env.EXPRESS_PORT}`
  );
});
