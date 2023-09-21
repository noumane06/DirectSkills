import { Request, Response } from "express";
import fs from "fs";
import { calculateAverages, findBestTimeToBuyAndSellStocks } from "../helpers/stock-helpers";
import { IFetchedStockData } from "../types/stock";

export const getStockData = async (req: Request, res: Response) => {
  const { priceLimit } = req.query;

  const fileData = fs.readFileSync("src/app/data/StockPrices.json", "utf8");
  const data: IFetchedStockData[] = JSON.parse(fileData);

  const averages = calculateAverages(data);

  const bestTimeToBuyAndSellAmazon = findBestTimeToBuyAndSellStocks(data, "AMAZON", Number(priceLimit));
  const bestTimeToBuyAndSellGoogle = findBestTimeToBuyAndSellStocks(data, "GOOGLE", Number(priceLimit));

  res.status(200).json({
    averages,
    bestTimeToBuyAndSellAmazon,
    bestTimeToBuyAndSellGoogle,
  });
};
