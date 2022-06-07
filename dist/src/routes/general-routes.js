"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const auth_router_1 = __importDefault(require("./Auth/auth-router"));
const user_router_1 = __importDefault(require("./User/user-router"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth-middleware"));
const admin_router_1 = __importDefault(require("./Admin/admin-router"));
const router = express_1.default.Router();
router.use("/auth", auth_router_1.default);
router.use("/user", auth_middleware_1.default.isLoggined, user_router_1.default);
router.use("/admin", auth_middleware_1.default.isLoggined, auth_middleware_1.default.isAdmin, admin_router_1.default);
module.exports = router;
