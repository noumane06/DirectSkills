import express from "express";
import {
  getStockData,
} from "../controllers/get-stock";

const router = express.Router();

router.get("/getStockData", getStockData);

export default router;