require("dotenv").config();
const express = require("express");
const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
