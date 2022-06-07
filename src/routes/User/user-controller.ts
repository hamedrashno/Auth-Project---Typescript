import BaseController from "../base-controller";
import * as bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { IUserCreateModel } from "../../models/models/create-user-model";
import UserTable from "../../models/tables/userTable";
class UserController extends BaseController {
  constructor() {
    super();
  }
  dashboard = async (req: Request, res: Response) => {
    res.send("User Dashboard");
  };

  me = async (req: Request, res: Response) => {
    this.response(res, "", {
      name: (req as any).user.name,
      email: (req as any).user.email,
    });
  };
}

export = new UserController();
