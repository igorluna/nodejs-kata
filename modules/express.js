const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Content Type: ${req.headers["content-type"]}`);
  next();
});

app.get("/teste", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Test Page</h1>");
});

const port = 8080;

app.listen(port, () => console.log(`Rodando express na porta ${port}`));
