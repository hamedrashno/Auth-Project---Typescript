"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const config_1 = __importDefault(require("config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userTable_1 = __importDefault(require("../models/tables/userTable"));
function isLoggined(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.header("x-auth-token");
        if (!token)
            res.status(401).send("access denied");
        try {
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.get("jwt_key"));
            console.log(decoded);
            const user = yield userTable_1.default.findById(decoded._id);
            console.log("user");
            console.log(user);
            req.user = user;
            next();
        }
        catch (ex) {
            res.status(400).send("invalid token");
        }
    });
}
function isAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.user.isAdmin)
            return res.status(403).send("access denied: not admin");
        next();
    });
}
module.exports = {
    isLoggined,
    isAdmin,
};
