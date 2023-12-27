const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@tutorialnode01.7vo4u94.mongodb.net/dataBase?retryWrites=true&w=majority`
    )
    .then(() =>
      console.log("Tudo certo nada errado na hora de conectar com o bd")
    )
    .catch((err) => console.log(`Houve um erro ao tentar conectar ${err}`));
};

module.exports = connectToDatabase;
