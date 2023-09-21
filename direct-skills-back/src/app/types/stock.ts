export interface IFetchedStockData {
  company: string;
  v: number;
  vw: number;
  o: number;
  c: number;
  highestPriceOfTheDay: number;
  lowestPriceOfTheDay: number;
  timestamp: number;
  n: number;
}

export interface IStock {
  [company: string]: {
    dateTime: string;
    averageMonthlyPrice: number;
  }[];
}
