const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const port = 8000;

let conn = null;

const initMysql = async () => {
  conn = await mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "tutorial",
  });
};

app.get("/hello-world", (req, res) => {
  res.send("Hello World");
});

app.get("/", async (req, res) => {
  const [result] = await conn.query("select * from account");
  res.json(result);
});

app.listen(port, async () => {
  await initMysql();
  console.log(`Listen Port : ${port}`);
});
