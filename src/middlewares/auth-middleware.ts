import config from "config";
import jwt from "jsonwebtoken";
import UserTable from "../models/tables/userTable";
import { Request, Response, NextFunction } from "express";
import { use } from "../routes/general-routes";

async function isLoggined(req: Request, res: Response, next: NextFunction) {
  const token = req.header("x-auth-token");
  if (!token) res.status(401).send("access denied");
  try {
    const decoded = jwt.verify(token as string, config.get("jwt_key"));
    console.log(decoded);

    const user = await UserTable.findById((decoded as any)._id);
    console.log("user");
    console.log(user);

    (req as any).user = user;
    next();
  } catch (ex) {
    res.status(400).send("invalid token");
  }
}

async function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (!(req as any).user.isAdmin)
    return res.status(403).send("access denied: not admin");
  next();
}

export = {
  isLoggined,
  isAdmin,
};
