"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const admin_controller_1 = __importDefault(require("./admin-controller"));
const router = express_1.default.Router();
router.get("/", admin_controller_1.default.dashboard);
module.exports = router;
