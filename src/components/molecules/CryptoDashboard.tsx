import { useEffect, useState } from 'react';
import { getCryptos } from '../../services/cryptoService';
import { Link } from 'react-router-dom';
import { Crypto } from '../../domain/models/models';

export default function CryptoDashboard() {
    const [cryptos, setCryptos] = useState<Crypto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCryptos();
            setCryptos(data);
        };

        fetchData();
    }, []);

    return (
        <ul>
            {cryptos.map((crypto) => (
                <li key={crypto.id}>
                    <Link to={`/coin/${crypto.id}`}>
                        <img src={crypto.image} alt={crypto.name} width={24} />
                        {crypto.name} ({crypto.symbol.toUpperCase()}) - ${crypto.current_price.toLocaleString()}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
