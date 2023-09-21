import chai from "chai";
import chaiHttp from "chai-http";
import fs from "fs";
import app from "../../server";
import { calculateAverages, findBestTimeToBuyAndSellStocks } from "../helpers/stock-helpers";
import { IFetchedStockData } from "../types/stock";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Stock Data Controller", () => {
  // Loading the stock data from the JSON file
  const StockData: IFetchedStockData[] = JSON.parse(fs.readFileSync("src/app/data/StockPrices.json", "utf8"));
  const priceLimit = 100.0;

  it("should return stock data best time to buy/sell for Amazon", (done) => {
    const amazonBestTime = findBestTimeToBuyAndSellStocks(StockData, "AMAZON", priceLimit);

    chai
      .request(app)
      .get("/stock/getStockData")
      .query({ priceLimit })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.averages).to.be.an("object");
        expect(res.body.bestTimeToBuyAndSellAmazon).to.be.an("object");
        expect(res.body.bestTimeToBuyAndSellAmazon).to.deep.equal(amazonBestTime);
        done();
      });
  });

  it("should return stock data best time to buy/sell for Google", (done) => {
    const googleBestTime = findBestTimeToBuyAndSellStocks(StockData, "GOOGLE", priceLimit);

    chai
      .request(app)
      .get("/stock/getStockData")
      .query({ priceLimit })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.averages).to.be.an("object");
        expect(res.body.bestTimeToBuyAndSellGoogle).to.be.an("object");
        expect(res.body.bestTimeToBuyAndSellGoogle).to.deep.equal(googleBestTime);
        done();
      });
  });

  it("should return stock data averages", (done) => {
    const averages = calculateAverages(StockData);

    chai
      .request(app)
      .get("/stock/getStockData")
      .query({ priceLimit })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.averages).to.be.an("object");
        expect(res.body.averages).to.deep.equal(averages);
        done();
      });
  });
});
