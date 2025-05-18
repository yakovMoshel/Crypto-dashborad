import { getCryptos } from '../../services/cryptoService';
import { Link, useLoaderData } from 'react-router-dom';
import { Crypto } from '../../domain/models/models';
import styles from '../../styles/CryptoDashboard.module.css';

export default function CryptoDashboard() {
    const cryptos = useLoaderData() as Crypto[];

    return (
        <div className={styles.dashboard}>
            <ul className={styles.list}>
                {cryptos.map((crypto) => (
                    <li key={crypto.id} className={styles.item}>
                        <Link to={`/coin/${crypto.id}`} className={styles.link}>
                            <img src={crypto.image} alt={crypto.name} className={styles.image} />
                            <span>{crypto.name} ({crypto.symbol.toUpperCase()})</span>
                            <span>- ${crypto.current_price.toLocaleString()}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function loader() {
    const cryptos = await getCryptos();
    return cryptos;
}