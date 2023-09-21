import { IStockWithBuyAndSellInfoData } from "@/my-types/stock";
import StockAndTradeWrapper from "@/my-wrappers/StockAndTradeWrapper";
import Logo from "@/public/logo.png";
import Image from "next/image";

async function fetchStockData(): Promise<IStockWithBuyAndSellInfoData> {
  return fetch(`${process.env.API_URL}/stock/getStockData?priceLimit=100.000`)
    .then(async (res) => {
      const data = await res.json();
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}

export default async function Home() {
  const stockData = await fetchStockData();

  if (!stockData) {
    return <div>loading...</div>;
  }

  return (
    <div className="px-5 py-8 w-full">
      <header className="mb-5">
        <div className="flex items-center justify-between " aria-label="Global">
          <div className="flex items-center gap-3 lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                // className="h-8 w-auto"
                src={Logo}
                height={32}
                width={40}
                alt=""
              />
            </a>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Evolution du prix des actions Amazon et Google sur 2023
            </h3>
          </div>
        </div>
      </header>
      <StockAndTradeWrapper StockAndTradeData={stockData} />
    </div>
  );
}
