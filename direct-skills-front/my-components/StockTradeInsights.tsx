import { BuyAndSellInfo } from "@/my-types/stock";
import InsightDisplay from "./priv/InsightDisplay";

interface IStockTradInsightsProps {
  bestTimeToBuyAndSellAmazon: BuyAndSellInfo;
  bestTimeToBuyAndSellGoogle: BuyAndSellInfo;
}

export default function StockTradInsights(
  props: IStockTradInsightsProps
): JSX.Element {
  return (
    <div className="mt-2 pt-4 flex flex-col gap-2">
      <InsightDisplay
        buyAndSellData={props.bestTimeToBuyAndSellAmazon}
        company="AMAZON"
      />
      <InsightDisplay
        buyAndSellData={props.bestTimeToBuyAndSellGoogle}
        company="GOOGLE"
      />
    </div>
  );
}
