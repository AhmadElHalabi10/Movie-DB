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

app.get("/hello/:id", (req, res) => {
  const id = req.params.id || "world";
  res.send({ status: 200, message: `Hello, ${id}` });
});

app.get("/hello", (req, res) => {
  res.send({ status: 200, message: `Hello, ` });
});

// app.get("/search", (req, res) => {
//   const search = req.query.s;

//   if (typeof search != "undefined") {
//     const response = {
//       status: 200,
//       message: "ok",
//       data: search,
//     };

//     res.send(response);
//   } else {
//     const response = {
//       status: 500,
//       error: true,
//       message: "you have to provide a search",
//     };

//     res.status(500);
//     res.send(response);
//   }
// });

app.get("/search", (req, res) => {
  const search = req.query.s;
  if (search) {
    res.status(200).json({ status: 200, message: "OK", data: search });
  } else {
    res.status(500).json({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  }
});

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب", year: 1992, rating: 6.2 },
];

app.get("/movies/create", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/movies/read", (req, res) => {
  res.send({ status: 200, data: movies });
});

app.get("/movies/update", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/movies/delete", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
