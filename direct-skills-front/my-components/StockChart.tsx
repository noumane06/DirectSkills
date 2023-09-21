"use client";

import { IStock } from "@/my-types/stock";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface IStockChartProps {
  StockData: IStock;
}

export default function StockChart(props: IStockChartProps): JSX.Element {
  const dateTimes = props.StockData["AMAZON"].map((item) => {
    return item.dateTime;
  });

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: dateTimes,
    },
    tooltip: {
      x: {
        format: "MM/yy",
      },
    },
  };

  const StockSeries: ApexAxisChartSeries = Object.entries(props.StockData).map(
    ([key, value]) => {
      return {
        name: key,
        data: value.map((item) => {
          console.log(item.averageMonthlyPrice);
          return item.averageMonthlyPrice;
        }),
      };
    }
  );

  return (
    <ReactApexChart
      options={options}
      series={StockSeries}
      type="area"
      height={350}
    />
  );
}
