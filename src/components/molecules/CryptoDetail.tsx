import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { stripHtml } from '../../utils/sanitize';
import { CoinData } from '../../domain/models/models';
import axios from 'axios';

export default function CryptoDetail() {
    const { id } = useParams<{ id: string }>();
    const [coin, setCoin] = useState<CoinData | null>(null);

    useEffect(() => {
        if (!id) return;

        axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => setCoin(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!coin) return <p>Loading...</p>;

    return (
        <div>
            <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
            <img src={coin.image.large} alt={coin.name} width={100} />
            <p>Price: ${coin.market_data.current_price.usd.toLocaleString()}</p>
            <p>24h Change: {coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
            <p>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
            <p>Volume: ${coin.market_data.total_volume.usd.toLocaleString()}</p>
            <p>{stripHtml(coin.description.en.split('. ')[0])}</p>    </div>
    );
}
