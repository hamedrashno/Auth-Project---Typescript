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
const base_controller_1 = __importDefault(require("../base-controller"));
class UserController extends base_controller_1.default {
    constructor() {
        super();
        this.dashboard = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send("User Dashboard");
        });
        this.me = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("me ctrl");
            this.response(res, "", {
                name: req.user.name,
                email: req.user.email,
            });
        });
    }
}
module.exports = new UserController();
