import fs from "fs";
import { IFetchedStockData, IStock } from "../types/stock";
import { calculateAverages, findBestTimeToBuyAndSellStocks } from "./stock-helpers";

const StockData: IFetchedStockData[] = JSON.parse(fs.readFileSync("src/app/data/mockData.json", "utf8"));

describe("findBestTimeToBuyAndSellStocks", () => {
  const priceLimit = 100.0;

  const expectedData = {
    buyDate: "2023-08-01",
    sellDate: "2023-09-01",
    buyPrice: "40.000",
    sellPrice: "110.000",
    profit: "70.000",
  };

  it("should find the best time to buy and sell stocks", () => {
    const result = findBestTimeToBuyAndSellStocks(StockData, "AMAZON", priceLimit);
    expect(result).toEqual(expectedData);
  });
});

describe("calculateAverages", () => {
  const expectedData: IStock = {
    GOOGLE: [
      {
        averageMonthlyPrice: 30.0,
        dateTime: "7/2023",
      },
      {
        averageMonthlyPrice: 125.0,
        dateTime: "8/2023",
      },
      {
        averageMonthlyPrice: 75.0,
        dateTime: "9/2023",
      },
    ],
    AMAZON: [
      {
        averageMonthlyPrice: 180.0,
        dateTime: "7/2023",
      },
      {
        averageMonthlyPrice: 45.0,
        dateTime: "8/2023",
      },
      {
        averageMonthlyPrice: 60.0,
        dateTime: "9/2023",
      },
    ],
  };

  it("should calculate company averages", () => {
    const result = calculateAverages(StockData);
    expect(result).toEqual(expectedData);
  });
});
