import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import morgan from "morgan";

import StockRoutes from "./app/routes/stock.route";

dotenv.config();

const app: Express = express();
const allowedOrigins = ["http://localhost:3000", "http://localhost:3000/"];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

/************************************************************************************
 *                               Routes registry
 ***********************************************************************************/

app.use("/ping", (_, res) => {
  res.status(200).json({
    message: "server up and running :) ",
  });
});
app.use("/stock", StockRoutes);

/************************************************************************************
 *                               Error Handling
 ***********************************************************************************/

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  return res.status(500).json({
    errorName: err.name,
    message: err.message,
    stack: err.stack || "no stack defined",
  });
});

export default app;
