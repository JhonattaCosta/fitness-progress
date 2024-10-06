const express = require("express");
const app = express();

const port = 3000;
const host = "localhost";

app.get("/", (req, res) => {
  res.send("Em construção...");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
