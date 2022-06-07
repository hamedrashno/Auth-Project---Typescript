import express, { Express, Request, Response } from "express";
import authRouter from "./Auth/auth-router";
import userRouter from "./User/user-router";
import authMiddleware from "../middlewares/auth-middleware";
import adminRouter from "./Admin/admin-router";
const router = express.Router();
router.use("/auth", authRouter);
router.use("/user", authMiddleware.isLoggined, userRouter);
router.use(
  "/admin",
  authMiddleware.isLoggined,
  authMiddleware.isAdmin,
  adminRouter
);
export = router;
