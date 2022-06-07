const mongoose = require("mongoose");
const config = require("config");

export = function () {
  mongoose
    .connect(config.get("db.address"))
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("could not connect to mongodb"));
};
