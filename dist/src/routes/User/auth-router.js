"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("./auth-controller"));
const auth_validator_1 = __importDefault(require("./auth-validator"));
const router = express_1.default.Router();
router.post("/register", auth_validator_1.default.registerValidator(), auth_controller_1.default.validate, auth_controller_1.default.register);
router.post("/login", auth_validator_1.default.loginValidator(), auth_controller_1.default.validate, auth_controller_1.default.login);
module.exports = router;
