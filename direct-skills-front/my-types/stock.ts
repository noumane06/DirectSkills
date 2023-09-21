export interface IStock {
  [company: string]: {
    dateTime: string;
    averageMonthlyPrice: number;
  }[];
}

export interface BuyAndSellInfo {
  buyDate: string;
  sellDate: string;
  buyPrice: string;
  sellPrice: string;
  profit: string;
}

export interface IStockWithBuyAndSellInfoData {
  averages: IStock;
  bestTimeToBuyAndSellAmazon: BuyAndSellInfo;
  bestTimeToBuyAndSellGoogle: BuyAndSellInfo;
}
