import { IStockWithBuyAndSellInfoData } from "@/my-types/stock";

export const mockStockData: IStockWithBuyAndSellInfoData = {
  bestTimeToBuyAndSellAmazon: {
    buyDate: "2021-01-04",
    buyPrice: "3172.709",
    sellDate: "2021-01-12",
    sellPrice: "3272.709",
    profit: "54.760010",
  },
  averages: {
    AMAZON: [
      {
        averageMonthlyPrice: 3172.709,
        dateTime: "1/2021",
      },
      {
        averageMonthlyPrice: 3172.709,
        dateTime: "1/2021",
      },
    ],
  },
  bestTimeToBuyAndSellGoogle: {
    buyDate: "2021-01-04",
    buyPrice: "3172.709",
    sellDate: "2021-01-12",
    sellPrice: "3272.709",
    profit: "54.760010",
  },
};
