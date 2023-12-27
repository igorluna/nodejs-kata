const express = require("express");
const UserModel = require("../src/models/user.models");

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

app.get("/users", async (req, res) => {
  try {
    const result = await UserModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const result = await UserModel.create(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UserModel.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UserModel.findByIdAndUpdate(id, req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UserModel.findByIdAndDelete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando express na porta ${port}`));
