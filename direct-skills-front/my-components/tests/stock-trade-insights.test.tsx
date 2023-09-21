import { render, screen } from "@testing-library/react";
import StockTradInsights from "../StockTradeInsights";
import { mockStockData } from "./variables";

describe("StockTradeInsights", () => {
  it("renders without errors", () => {
    render(
      <StockTradInsights
        bestTimeToBuyAndSellAmazon={mockStockData.bestTimeToBuyAndSellAmazon}
        bestTimeToBuyAndSellGoogle={mockStockData.bestTimeToBuyAndSellGoogle}
      />
    );
  });

  it("renders StockTradInsights with amazon data", () => {
    const expectedText =
      "Aymen devrait acheter 100.000$ d'actions AMAZON le 04/01/2021  au prix de 3172.709$ et les revendre le 12/01/2021  au prix de 3272.709$ pour un bénéfice de 54.760010$";
    render(
      <StockTradInsights
        bestTimeToBuyAndSellAmazon={mockStockData.bestTimeToBuyAndSellAmazon}
        bestTimeToBuyAndSellGoogle={mockStockData.bestTimeToBuyAndSellGoogle}
      />
    );
    //

    const amazonInsightText = screen.getByTestId(
      "AMAZON-insight-text"
    ).textContent;

    expect(amazonInsightText).toBe(expectedText);
  });

  it("renders StockTradInsights with google data", () => {
    const expectedText =
      "Anouar devrait acheter 100.000$ d'actions GOOGLE le 04/01/2021  au prix de 3172.709$ et les revendre le 12/01/2021  au prix de 3272.709$ pour un bénéfice de 54.760010$";
    render(
      <StockTradInsights
        bestTimeToBuyAndSellAmazon={mockStockData.bestTimeToBuyAndSellAmazon}
        bestTimeToBuyAndSellGoogle={mockStockData.bestTimeToBuyAndSellGoogle}
      />
    );

    const amazonInsightText = screen.getByTestId(
      "GOOGLE-insight-text"
    ).textContent;

    expect(amazonInsightText).toBe(expectedText);
  });
});
