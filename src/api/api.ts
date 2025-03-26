import { CoinsData, Quotes } from './types';

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

export const prepareChartData = (quotes: Quotes['USD'] | undefined) => {
    if (!quotes) return [];

    return [
        { time: '15m', percent: quotes.percent_change_15m },
        { time: '30m', percent: quotes.percent_change_30m },
        { time: '1h', percent: quotes.percent_change_1h },
        { time: '6h', percent: quotes.percent_change_6h },
        { time: '12h', percent: quotes.percent_change_12h },
        { time: '24h', percent: quotes.percent_change_24h ?? 0 },
        { time: '7d', percent: quotes.percent_change_7d },
        { time: '30d', percent: quotes.percent_change_30d },
        { time: '1y', percent: quotes.percent_change_1y },
    ];
};
