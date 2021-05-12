import "dotenv/config";

import { $isLocal, $serverPort } from "config";
import express, { json, urlencoded } from "express";

import { isConnected } from "./middlewares/user";
import { join } from "path";
import mongoose from "mongoose";
import next from "next";
import userRoute from "./routes/user";

export const nextApp = next({ dev: $isLocal() });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  app.use("/node_modules", express.static(join(__dirname, "../node_modules")));
  app.use(express.static(join(__dirname, "../public")));
  app.use(json());
  app.use(urlencoded({ extended: false }));

  app.use("/api", userRoute);
  app.get('/login', (req, res) => {
    return nextApp.render(req, res, '/login', req.query)
  })

  app.get("/:application", (req, res) => {
    const { application } = req.params;
    return nextApp.render(req, res, `/${application}`, req.query);
  });
  app.all("*", (req, res) => {
    return handle(req, res);
  });
  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen($serverPort());
});
