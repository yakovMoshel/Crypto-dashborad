import { useLoaderData } from 'react-router-dom';
import styles from '../../styles/CryptoDetail.module.css';
import { stripHtml } from '../../utils/sanitize';
import { CoinData } from '../../domain/models/models';
import CryptoChart from '../organisms/CryptoChart';
import { fetchCryptoData } from '../../services/CryptoHistory';
import AddToWatchList from '../organisms/AddToWatchList';

export default function CryptoDetail() {
  const { coin, history } = useLoaderData() as {
    coin: CoinData;
    history: { prices: [number, number][] };
  };

  if (!coin) return <p>Loading...</p>;

  return (
    <article className={styles.detailContainer}>
      <h1 className={styles.heading}>
        {coin.name} ({coin.symbol.toUpperCase()})
      </h1>
      <img
        src={coin.image.large}
        alt={coin.name}
        className={styles.image}
      />
      <p className={styles.detailText}>
        <span className={styles.highlight}>Price:</span> ${coin.market_data.current_price.usd.toLocaleString()}
      </p>
      <p className={styles.detailText}>
        <span className={styles.highlight}>24h Change:</span> {coin.market_data.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className={styles.detailText}>
        <span className={styles.highlight}>Market Cap:</span> ${coin.market_data.market_cap.usd.toLocaleString()}
      </p>
      <p className={styles.detailText}>
        <span className={styles.highlight}>Volume:</span> ${coin.market_data.total_volume.usd.toLocaleString()}
      </p>
      <p className={styles.detailText}>
        {stripHtml(coin.description.en.split('. ')[0])}.
      </p>

      <AddToWatchList coinId={coin.id} />

      <CryptoChart data={history.prices} />

    </article>
  );
}


export async function loader({ params }: any) {
  const id = params.id;

  try {
    const data = await fetchCryptoData(id);

    return {
      coin: data.detail,
      history: { prices: data.history }
    };
  } catch (error) {
    throw new Response(JSON.stringify({ message: 'Failed to load coin data' }), {
      status: 500,
    });
  }
}
