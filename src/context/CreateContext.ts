import { createContext } from 'react';
import { CoinsData } from '../api/types';

export interface CryptoContextType {
    coins: CoinsData[] | undefined;
    loading: boolean;
    error: string | null;
    filteredCoins: CoinsData[] | undefined;
    searchQuery: (query: string) => void;
    isCoins: boolean;
    selectCoin: (coin: CoinsData | undefined) => void;
    selectCurrentCoin: CoinsData | null;
    generalCoins: boolean;
    isFavoriteCoinsList: boolean;
    setIsFavoriteCoinsList: React.Dispatch<React.SetStateAction<boolean>>;
    favoriteCoinsId: string[];
    setToggleFavoriteCoin: (
        e: React.MouseEvent<SVGSVGElement>,
        coinId: string
    ) => void;
    setIsCoins: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CryptoContext = createContext<CryptoContextType | null>(null);
