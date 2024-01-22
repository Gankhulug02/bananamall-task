const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const PORT = 8000;

// Middlewares
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bananamall-task",
});
app.get("/", (req, res) => {
  return res.json("from backend");
});

app.listen(PORT, () => {
  console.log(`running at ${PORT}`);
});
