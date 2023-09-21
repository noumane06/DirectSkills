import { BuyAndSellInfo } from "@/my-types/stock";
import moment from "moment";

interface IInsightDisplayProps {
  company: "AMAZON" | "GOOGLE";
  buyAndSellData: BuyAndSellInfo;
}

export default function InsightDisplay(
  props: IInsightDisplayProps
): JSX.Element {
  return (
    <p className=" text-gray-700" data-testid={`${props.company}-insight-text`}>
      {props.company === "AMAZON" ? "Aymen" : "Anouar"} devrait acheter 100.000$
      d&apos;actions {props.company} le{" "}
      <span className="text-gray-900 font-medium">
        {moment(props.buyAndSellData.buyDate).format("DD/MM/YYYY")}{" "}
      </span>{" "}
      au prix de{" "}
      <span className="text-gray-900 font-medium">
        {props.buyAndSellData.buyPrice}$
      </span>{" "}
      et les revendre le{" "}
      <span className="text-gray-900 font-medium">
        {moment(props.buyAndSellData.sellDate).format("DD/MM/YYYY")}{" "}
      </span>{" "}
      au prix de{" "}
      <span className="text-gray-900 font-medium">
        {props.buyAndSellData.sellPrice}$
      </span>{" "}
      pour un bénéfice de{" "}
      <span className="text-gray-900 font-medium">
        {props.buyAndSellData.profit}$
      </span>
    </p>
  );
}
