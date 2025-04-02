import { useState, useEffect } from 'react';
import { CoinsData } from '../api/types';
import { fetchCoins } from '../api/api';
import { CryptoContext, TimeFrame } from './CreateContext';
import { useToggleFavoriteCoins } from './hooks';

export const CryptoContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [coins, setCoins] = useState<CoinsData[] | undefined>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filteredCoins, setFilteredCoins] = useState<CoinsData[] | undefined>(
        []
    );
    const [isCoins, setIsCoins] = useState<boolean>(false);
    const [selectCurrentCoin, setSelectCurrentCoin] =
        useState<CoinsData | null>(null);
    const [generalCoins, setGeneralCoins] = useState<boolean>(true);
    const [isFavoriteCoinsList, setIsFavoriteCoinsList] =
        useState<boolean>(false);

    const [selectedCoinModalInfo, setSelectedCoinModalInfo] =
        useState<CoinsData | null>(null);
    const [isModalOpenInfo, setIsModalOpenInfo] = useState<boolean>(false);
    const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>({
        label: '24h',
        value: '24h',
    });

    const { setToggleFavoriteCoin, favoriteCoinsId } = useToggleFavoriteCoins();

    // Filtered coins
    const searchQuery = (coinSearch: string) => {
        let filteredCoins = coins?.filter((coin) =>
            coin.name.toLowerCase().includes(coinSearch.toLowerCase())
        );
        if (filteredCoins?.length === 0) {
            setIsCoins(true);
        } else {
            setIsCoins(false);
            setFilteredCoins(filteredCoins);
        }
        if (isFavoriteCoinsList) {
            filteredCoins = filteredCoins?.filter((coin) =>
                favoriteCoinsId.includes(coin.id)
            );
        }

        setIsCoins(filteredCoins?.length === 0);
        setFilteredCoins(filteredCoins);
        console.log(filteredCoins);
    };

    const selectCoin = (coin: CoinsData | undefined): void => {
        setSelectCurrentCoin(coin ?? null);
        setGeneralCoins(false);
        console.log(coin);
    };
    useEffect(() => {
        const loadCoins = async () => {
            try {
                setLoading(true);
                const data = await fetchCoins();
                setCoins(data);
                console.log(coins);
            } catch (err) {
                setError(`Не вдалося завантажити монети ${err}`);
            } finally {
                setLoading(false);
            }
        };
        loadCoins();
    }, []);

    useEffect(() => {
        let updatedFilteredCoins = coins;
        if (isFavoriteCoinsList) {
            updatedFilteredCoins = coins?.filter((coin) =>
                favoriteCoinsId.includes(coin.id)
            );
        }
        setFilteredCoins(updatedFilteredCoins);
    }, [isFavoriteCoinsList, favoriteCoinsId, coins]);
    return (
        <CryptoContext
            value={{
                coins,
                loading,
                error,
                searchQuery,
                filteredCoins,
                isCoins,
                selectCoin,
                selectCurrentCoin,
                generalCoins,
                isFavoriteCoinsList,
                setIsFavoriteCoinsList,
                favoriteCoinsId,
                setToggleFavoriteCoin,
                setIsCoins,

                selectedCoinModalInfo,
                setSelectedCoinModalInfo,
                isModalOpenInfo,
                setIsModalOpenInfo,

                selectedTimeFrame,
                setSelectedTimeFrame,
            }}
        >
            {children}
        </CryptoContext>
    );
};
