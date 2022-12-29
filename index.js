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

//Step6
const movies = [
  { title: "Jaws", year: "1975", rating: 8 },
  { title: "Avatar", year: "2009", rating: 7.8 },
  { title: "Brazil", year: "1985", rating: 8 },
  { title: "الإرهاب والكباب", year: "1992", rating: 6.2 },
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

// //Sort By date
// app.get("/movies/read/by-date", (req, res) => {
//   res.send({
//     status: 200,
//     data: movies.sort((a, b) => a.year - b.year),
//   });
// });

// //Sort By rating
// app.get("/movies/read/by-rating", (req, res) => {
//   res.send({
//     status: 200,
//     data: movies.sort((a, b) => a.rating - b.rating),
//   });
// });

// //Sort By Title
// app.get("/movies/read/by-title", (req, res) => {
//   let sorted = movies.sort((a, b) => {
//     let A = a.title.toLowerCase();
//     let B = b.title.toLowerCase();
//     if (A < B) {
//       return -1;
//     }
//     if (A > B) {
//       return 1;
//     }
//     return 0;
//   });
//   res.send({
//     status: 200,
//     data: sorted,
//   });
// });

app.get("/movies/read/by-date", (req, res) => {
  res.send({ status: 200, data: movies.sort((a, b) => a.year - b.year) });
});

app.get("/movies/read/by-rating", (req, res) => {
  res.send({ status: 200, data: movies.sort((a, b) => a.rating - b.rating) });
});

app.get("/movies/read/by-title", (req, res) => {
  const moviesOrderedByTitle = movies.sort((a, b) => {
    const A = a.title.toLowerCase();
    const B = b.title.toLowerCase();
    if (A < B) {
      return -1;
    } else if (A > B) {
      return 1;
    } else {
      return 0;
    }
  });
  res.send({
    status: 200,
    data: moviesOrderedByTitle,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
