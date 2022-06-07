"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./user-controller"));
const router = express_1.default.Router();
router.get("/", user_controller_1.default.dashboard);
router.get("/me", user_controller_1.default.me);
module.exports = router;
