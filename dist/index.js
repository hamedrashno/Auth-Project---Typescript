"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./src/startup/config"));
const db_1 = __importDefault(require("./src/startup/db"));
dotenv_1.default.config();
(0, config_1.default)();
(0, db_1.default)();
