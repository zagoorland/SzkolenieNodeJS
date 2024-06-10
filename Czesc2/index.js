import express from "express";

const app = express();
const methodLogger = (req, res, next) => {
  console.log(req.method);
  next();
};

// Middleware globalnie obsługujące błędy
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Coś nie pykło!");
};
app.use(errorHandler);
// Przykładowa ścieżka, która wyrzuca błąd
app.get("/", (req, res) => {
  throw new Error("AŁA");
});

app.use(methodLogger);
app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

app.use("/user/:id", function (req, res, next) {
  console.log(req.method);
  next();
});
