// // const express = require("express");
// // const app = express();
// // const port = 3000;
// // const http = require("http");

// // const server = http.createServer();

// // server.listen(3000);

// // app.get("/ahmad", (req, res) => {
// //   res.send("Hello World!");
// // });

// // server.listen(3000);

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Ok");
// });

// app.get("/test", (req, res) => {
//   res.send({ status: 200, message: "ok" });
// });

// app.get("/time", (req, res) => {
//   res.send({ status: 200, message: Date() });
// });

// app.get("/hello/:id", (req, res) => {
//   const id = req.params.id || "world";
//   res.send({ status: 200, message: `Hello, ${id}` });
// });

// // app.get("/hello", (req, res) => {
// //   res.send({ status: 200, message: `Hello, ` });
// // });

// app.get("/search", (req, res) => {
//   const search = req.query.s;
//   if (search) {
//     res.status(200).json({ status: 200, message: "OK", data: `${search}` });
//   } else {
//     res.status(500).json({
//       status: 500,
//       error: true,
//       message: "you have to provide a search",
//     });
//   }
// });

// //Step6
// const movies = [
//   { title: "Jaws", year: "1975", rating: 8 },
//   { title: "Avatar", year: "2009", rating: 7.8 },
//   { title: "Brazil", year: "1985", rating: 8 },
//   { title: "الإرهاب والكباب", year: "1992", rating: 6.2 },
// ];

// app.get("/movies/create", (req, res) => {
//   res.send({ status: 200, message: "ok" });
// });

// app.get("/movies/read", (req, res) => {
//   res.send({ status: 200, data: movies });
// });

// app.get("/movies/update", (req, res) => {
//   res.send({ status: 200, message: "ok" });
// });

// // app.get("/movies/delete", (req, res) => {
// //   res.send({ status: 200, message: "ok" });
// // });

// app.get("/movies/read/by-date", (req, res) => {
//   res.send({ status: 200, data: movies.sort((a, b) => a.year - b.year) });
// });

// app.get("/movies/read/by-rating", (req, res) => {
//   res.send({ status: 200, data: movies.sort((a, b) => a.rating - b.rating) });
// });

// app.get("/movies/read/by-title", (req, res) => {
//   const moviesOrderedByTitle = movies.sort((a, b) => {
//     const A = a.title.toLowerCase();
//     const B = b.title.toLowerCase();
//     if (A < B) {
//       return -1;
//     } else if (A > B) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   res.send({
//     status: 200,
//     data: moviesOrderedByTitle,
//   });
// });
// ("33");
// 33;
// SVGAnimatedIntegerstring;
// string;
// // Step 7

// app.get("/movies/read/id/:id", (req, res) => {
//   const ID = parseInt(req.params.id);
//   if (ID <= movies.length) {
//     res.status(200).json({ status: 200, message: "OK", data: movies[ID] });
//   } else {
//     res.status(404).json({
//       status: 404,
//       error: true,
//       message: "the movie " + ID + " does not exist",
//     });
//   }
// });

// //Step 8
// app.post("/movies/add", (req, res) => {
//   const { title, year, rating } = req.query;
//   if (!title || !year) {
//     return res.json({
//       status: 403,
//       error: true,
//       message: "You cannot create a movie without providing a title and a year",
//     });
//   }

//   if (year.length !== 4 || isNaN(year)) {
//     return res.json({
//       status: 403,
//       error: true,
//       message: "Year must be a 4-digit number",
//     });
//   }
//   if (!rating) {
//     rating = 4;
//   }
//   const mov = {
//     title,
//     year,
//     rating,
//   };
//   movies.push(mov);
//   res.json(movies);
// });

// //Step 9
// app.delete("/movies/delete/:id", (req, res) => {
//   const ID = req.params.id;
//   if (isNaN(ID)) {
//     res.status(404);
//     res.send({
//       status: 404,
//       error: true,
//       message: `please enter a valid id number`,
//     });
//   } else if (ID < 0 || ID > movies.length - 1) {
//     res.status(404);
//     res.send({
//       status: 404,
//       error: true,
//       message: `the movie ${ID} does not exist`,
//     });
//   } else {
//     movies.splice(ID, 1);
//     res.send(movies);
//   }
// });

// //Step 10
// app.get("/movies/update/:id", (req, res) => {
//   const ID = req.params.id;
//   if (isNaN(ID)) {
//     res.status(404);
//     res.send({
//       status: 404,
//       error: true,
//       message: `please enter a valid id number`,
//     });
//   } else if (ID < 0 || ID > movies.length - 1) {
//     res.status(404);
//     res.send({
//       status: 404,
//       error: true,
//       message: `the movie ${req.params.id} does not exist`,
//     });
//   } else {
//     if (req.query.title !== undefined && req.query.title !== "") {
//       movies[req.params.id] = {
//         ...movies[req.params.id],
//         title: req.query.title,
//       };
//     }
//     if (
//       !isNaN(req.query.year) &&
//       req.query.year !== "" &&
//       req.query.year.length == 4
//     ) {
//       movies[req.params.id] = {
//         ...movies[req.params.id],
//         year: parseInt(req.query.year),
//       };
//     }
//     if (
//       !isNaN(req.query.rating) &&
//       req.query.rating !== undefined &&
//       req.query.rating !== ""
//     ) {
//       movies[req.params.id] = {
//         ...movies[req.params.id],
//         rating: parseFloat(req.query.rating),
//       };
//     }
//     res.send(movies);
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// //Step 8 - CREATE
// app.get("/movies/create", (req, res) => {
//   if (!req.query.title) {
//     if (!req.query.year) {
//       res.status(403).send({
//         status: 403,
//         error: true,
//         message:
//           "you cannot create a movie without providing a title and a year",
//       });
//     } else {
//       res.status(403).send({
//         status: 403,
//         error: true,
//         message: "you cannot create a movie without providing a title",
//       });
//     }
//   } else if (!req.query.year) {
//     res.status(403).send({
//       status: 403,
//       error: true,
//       message: "you cannot create a movie without providing a year",
//     });
//   } else if (req.query.year.length != 4 || isNaN(req.query.year)) {
//     if (isNaN(req.query.year)) {
//       res.status(403).send({
//         status: 403,
//         error: true,
//         message: "The year provided is not a number",
//       });
//     } else {
//       res.status(403).send({
//         status: 403,
//         error: true,
//         message: "The year provided is not of 4 digits",
//       });
//     }
//   } else if (
//     req.query.year > new Date().getFullYear() ||
//     req.query.year < 1895
//   ) {
//     res.status(403).send({
//       status: 403,
//       error: true,
//       message: "The year provided is not valid",
//     });
//   } else if (
//     req.query.rating &&
//     (req.query.rating > 10 || req.query.rating < 0)
//   ) {
//     res.status(403).send({
//       status: 403,
//       error: true,
//       message: "The rating provided is not valid",
//     });
//   } else {
//     let newMovie = {
//       title: req.query.title,
//       year: req.query.year,
//       rating: `${req.query.rating || 4}`,
//     };
//     movies.push(newMovie);
//     res.status(200).send({ status: 200, data: movies });
//   }
// });

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://AhmdElHalabi:Ahmad%40%2F4321@cluster0.p7wt5w9.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const moviesRouter = require("./routers/datas");
app.use("/data", moviesRouter);

app.listen(3000, () => console.log("Server Started"));
