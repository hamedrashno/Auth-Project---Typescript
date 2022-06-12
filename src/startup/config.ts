import express, { Express, Request, Response, application } from "express";
import * as bodyParser from "body-parser";
import generalRouter from "../routes/general-routes";
let app: Express = express();
let port = process.env.PORT;

export = () => {
  app.use(express.json());
  app.use(bodyParser.json());
  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  app.use("/api", generalRouter);

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
};
