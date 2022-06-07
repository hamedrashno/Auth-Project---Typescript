import express from "express";
import _controller from "./user-controller";
const router = express.Router();

router.get("/", _controller.dashboard);

router.get("/me", _controller.me);
export = router;
