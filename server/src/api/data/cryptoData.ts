import { Crypto } from "../types/Crypto";

export const fetchCryptoData = async (): Promise<Crypto[]> => {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch cryptocurrencies: ${res.status}`);
  }

  return res.json();
};