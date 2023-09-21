import moment from "moment";
import { IFetchedStockData, IStock } from "../types/stock";

interface ICompanyAverage {
  year: number;
  month: number;
  totalHighPrice: number;
  totalLowPrice: number;
  count: number;
}

export function findBestTimeToBuyAndSellStocks(data: IFetchedStockData[], company: string, priceLimit: number) {
  // Filter and sort the data for the specified company by timestamp
  const sortedData = data.filter((entry) => entry.company === company).sort((a, b) => a.timestamp - b.timestamp);

  let maxProfit = 0;
  let buyDate: Date = new Date();
  let sellDate: Date = new Date();
  let buyPrice = 0;
  let sellPrice = 0;

  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i].lowestPriceOfTheDay <= priceLimit) {
        const profit = sortedData[j].highestPriceOfTheDay - sortedData[i].lowestPriceOfTheDay;

        if (profit > maxProfit) {
          maxProfit = profit;
          buyDate = new Date(sortedData[i].timestamp);
          sellDate = new Date(sortedData[j].timestamp);
          buyPrice = sortedData[i].lowestPriceOfTheDay;
          sellPrice = sortedData[j].highestPriceOfTheDay;
        }
      }
    }
  }

  return {
    buyDate: moment(buyDate).format("YYYY-MM-DD"),
    sellDate: moment(sellDate).format("YYYY-MM-DD"),
    buyPrice: buyPrice.toFixed(3),
    sellPrice: sellPrice.toFixed(3),
    profit: maxProfit.toFixed(3),
  };
}

export function calculateAverages(data: IFetchedStockData[]) {
  const companyAverages = {} as ICompanyAverage;
  const sortedData = data.sort((a, b) => a.timestamp - b.timestamp);

  sortedData.forEach((entry) => {
    const { company, highestPriceOfTheDay, lowestPriceOfTheDay, timestamp } = entry;

    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Add 1 because getMonth() returns a zero-based index

    // Creating a key in the dictionary for the company if it doesn't exist
    if (!companyAverages[company]) {
      companyAverages[company] = {};
    }

    // Creating a key in the company's data for the year-month combination if it doesn't exist
    if (!companyAverages[company][`${year}-${month}`]) {
      companyAverages[company][`${year}-${month}`] = {
        year,
        month,
        totalHighPrice: 0,
        totalLowPrice: 0,
        count: 0,
      };
    }

    companyAverages[company][`${year}-${month}`].totalHighPrice += highestPriceOfTheDay;
    companyAverages[company][`${year}-${month}`].totalLowPrice += lowestPriceOfTheDay;
    companyAverages[company][`${year}-${month}`].count++;
  });

  const averages: IStock = {};

  for (const company in companyAverages) {
    averages[company] = [];
    for (const yearMonth in companyAverages[company]) {
      const entry = companyAverages[company][yearMonth];
      const averageHighPrice = entry.totalHighPrice / entry.count;
      const averageLowPrice = entry.totalLowPrice / entry.count;
      averages[company].push({
        dateTime: `${entry.month}/${entry.year}`,
        averageMonthlyPrice: Number(((averageHighPrice + averageLowPrice) / 2).toFixed(3)),
      });
    }
  }

  return averages;
}
