import UserTable from "../models/tables/userTable";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
export default class BaseController {
  public User: typeof UserTable;
  constructor() {
    this.User = UserTable;
  }

  validationBody = (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const messages: string[] = [];
      errors.forEach((err) => {
        messages.push(err.msg);
      });

      res.status(400).json({
        message: "Validation Error",
        data: messages,
      });

      return false;
    }

    return true;
  };

  validate = (req: Request, res: Response, next: NextFunction) => {
    if (!this.validationBody(req, res)) {
      return;
    }
    next();
  };
  response(
    res: Response,
    message: String | null,
    data: any | null,
    code: number = 200
  ) {
    res.status(code).json({
      message,
      data,
    });
  }
}
