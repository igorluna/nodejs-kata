const dotenv = require("dotenv");
const connectToDataBase = require("./src/database/connection");

dotenv.config();

connectToDataBase();

require("./modules/express");
