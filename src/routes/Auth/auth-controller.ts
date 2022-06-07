import BaseController from "../base-controller";
import * as bcrypt from "bcrypt";
import config from "config";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { IUserCreateModel } from "../../models/models/create-user-model";
import UserTable from "../../models/tables/userTable";
class AuthController extends BaseController {
  constructor() {
    super();
  }
  register = async (req: Request, res: Response) => {
    const body: IUserCreateModel = req.body;

    let user = await this.User.findOne({ email: body.email });

    if (user) {
      return this.response(res, "this user already regestered", 400, 200);
    }

    const { name, email, password } = body;
    user = new this.User({ email, name, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    return this.response(res, "Success...", {
      id: user._id,
      name: user.name,
      email: user.email,
    });
  };

  login = async (req: Request, res: Response) => {
    const user = await this.User.findOne({ email: req.body.email });
    if (!user) {
      return this.response(res, "invalid email or password", null, 400);
    }
    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return this.response(res, "invalid email or password", 400);
    }

    const token = jwt.sign({ _id: user._id }, config.get("jwt_key"));

    this.response(res, "Success Logged In", { token });
  };
}

export = new AuthController();
