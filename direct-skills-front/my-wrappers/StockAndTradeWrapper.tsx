import StockChart from "@/my-components/StockChart";
import StockTradInsights from "@/my-components/StockTradeInsights";
import { IStockWithBuyAndSellInfoData } from "@/my-types/stock";

interface IStockAndTradeWrapperProps {
  StockAndTradeData: IStockWithBuyAndSellInfoData;
}

export default function StockAndTradeWrapper(
  props: IStockAndTradeWrapperProps
): JSX.Element {
  const { averages, bestTimeToBuyAndSellAmazon, bestTimeToBuyAndSellGoogle } =
    props.StockAndTradeData;
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg divide-y">
      <StockChart StockData={averages} />
      <StockTradInsights
        bestTimeToBuyAndSellAmazon={bestTimeToBuyAndSellAmazon}
        bestTimeToBuyAndSellGoogle={bestTimeToBuyAndSellGoogle}
      />
    </div>
  );
}
