const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@tutorialnode01.7vo4u94.mongodb.net/dataBase?retryWrites=true&w=majority`
    )
    .then(() => console.log("Mongo conectado"))
    .catch((error) => console.log(`Erro ao conectar: ${error}`));
};

module.exports = connectToDataBase;
