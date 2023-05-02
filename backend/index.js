const express = require("express");
const { connection } = require("./db");
const app = express();
app.use(express.json());
app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error.message);
    console.log("not connected to db");
  }
  console.log("server running on port 8080");
});
