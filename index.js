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
    res.status(200).json({ status: 200, message: "OK", data: `${search}` });
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

// Step 7

app.get("/movies/read/id/:id", (req, res) => {
  const ID = parseInt(req.params.id);
  if (ID <= movies.length) {
    res.status(200).json({ status: 200, message: "OK", data: movies[ID] });
  } else {
    res.status(404).json({
      status: 404,
      error: true,
      message: "the movie " + ID + " does not exist",
    });
  }
});

//Step 8
app.get("/movies/add", (req, res) => {
  const { title, year, rating } = req.query;
  if (!title || !year) {
    return res.json({
      status: 403,
      error: true,
      message: "You cannot create a movie without providing a title and a year",
    });
  }

  if (year.length !== 4 || isNaN(year)) {
    return res.json({
      status: 403,
      error: true,
      message: "Year must be a 4-digit number",
    });
  }
  if (!rating) {
    rating = 4;
  }
  const mov = {
    title,
    year,
    rating,
  };
  movies.push(mov);
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
