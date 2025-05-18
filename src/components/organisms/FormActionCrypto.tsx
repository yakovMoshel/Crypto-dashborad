import { redirect } from "react-router-dom";

export default async function addCryptoAction({ request }: { request: Request }) {
    const formData = await request.formData();
    const name = formData.get('name');
    const symbol = formData.get('symbol');

    try {
        await fetch('http://localhost:5000/api/cryptos', {
            method: request.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, symbol }),
        });

    } catch (error) {
        console.error('Error adding crypto:', error);
        throw error;
    }
    return redirect('/');
    
}