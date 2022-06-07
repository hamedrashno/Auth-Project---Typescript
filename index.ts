import dotenv from "dotenv";
import ExpressConfig from "./src/startup/config";
import db from "./src/startup/db";
dotenv.config();
new ExpressConfig().init();
db();
