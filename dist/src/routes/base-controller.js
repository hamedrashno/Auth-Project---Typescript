"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userTable_1 = __importDefault(require("../models/tables/userTable"));
const express_validator_1 = require("express-validator");
class BaseController {
    constructor() {
        this.validationBody = (req, res) => {
            const result = (0, express_validator_1.validationResult)(req);
            if (!result.isEmpty()) {
                const errors = result.array();
                const messages = [];
                errors.forEach((err) => {
                    messages.push(err.msg);
                });
                res.status(400).json({
                    message: "Validation Error",
                    data: messages,
                });
                return false;
            }
            return true;
        };
        this.validate = (req, res, next) => {
            if (!this.validationBody(req, res)) {
                return;
            }
            next();
        };
        this.User = userTable_1.default;
    }
    response(res, message, data, code = 200) {
        res.status(code).json({
            message,
            data,
        });
    }
}
exports.default = BaseController;
