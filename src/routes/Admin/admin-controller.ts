import BaseController from "../base-controller";
import { Request, Response, NextFunction } from "express";

class AdminController extends BaseController {
  dashboard = async (req: Request, res: Response) => {
    res.send("Admin Dashboard");
  };
}

export = new AdminController();
