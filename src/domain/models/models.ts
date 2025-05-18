export type Crypto = {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
};

export type CoinData = {
    id: string;
    name: string;
    symbol: string;
    image: { large: string };
    market_data: {
        current_price: { usd: number };
        market_cap: { usd: number };
        total_volume: { usd: number };
        price_change_percentage_24h: number;
    };
    description: { en: string };
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name?: string;
  type: string;
};

export type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};