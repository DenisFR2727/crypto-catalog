import { CoinsData } from './types';

export async function fetchCoins(): Promise<CoinsData[] | undefined> {
    try {
        const url = `https://api.coinpaprika.com/v1/tickers`;

        const response = await fetch(url);
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error fetch coins');
    } catch (error: unknown) {
        console.log(`Error ${error}`);
    }
}
