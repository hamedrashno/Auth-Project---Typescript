import dotenv from "dotenv";
import expressConfig from "./src/startup/config";
import dbConfig from "./src/startup/db";
dotenv.config();
expressConfig()
dbConfig();
