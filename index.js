require("./modules/express");
var dotenv = require("dotenv");
dotenv.config();
const connectToDataBase = require("./src/connection/connection");

connectToDataBase();
