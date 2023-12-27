// const { Person } = require("./person");
const doenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

doenv.config();

connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
// const person = new Person("Igor");
// console.log(person.sayMyName());

require("./modules/express");
