import express from "express";
import _controller from "./admin-controller";
const router = express.Router();

router.get("/", _controller.dashboard);
export = router;
