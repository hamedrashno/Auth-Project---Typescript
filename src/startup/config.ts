import express, { Express, Request, Response, application } from "express";
import * as bodyParser from "body-parser";
import generalRouter from "../routes/general-routes";
export default class expressConfig {
  app: Express = express();
  port = process.env.PORT;
  constructor() {}
  init() {
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    });

    this.app.use("/api", generalRouter);

    this.app.listen(this.port, () => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${this.port}`
      );
    });
  }
}
