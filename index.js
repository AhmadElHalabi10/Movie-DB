// const express = require("express");
// const app = express();
// const port = 3000;
// const http = require("http");

// const server = http.createServer();

// server.listen(3000);

// app.get("/ahmad", (req, res) => {
//   res.send("Hello World!");
// });

// server.listen(3000);

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Ok");
});

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  res.send({ status: 200, message: Date() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
