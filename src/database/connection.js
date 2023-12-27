const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@tutorialnode01.7vo4u94.mongodb.net/dataBase?retryWrites=true&w=majority`
    )
    .then(() => console.log("Conexão feita com mongodb"))
    .catch((error) =>
      console.log("Errar é humano, é culpa do dev que não conecta no bd")
    );
};

module.exports = connectToDatabase;
