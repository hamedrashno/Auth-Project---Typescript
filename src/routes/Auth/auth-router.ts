import express from "express";
import _controller from "./auth-controller";
import validator from "./auth-validator";
const router = express.Router();

router.post(
  "/register",
  validator.registerValidator(),
  _controller.validate,
  _controller.register
);

router.post(
  "/login",
  validator.loginValidator(),
  _controller.validate,
  _controller.login
);

export = router;
