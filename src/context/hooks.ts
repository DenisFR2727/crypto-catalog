import { useContext, useEffect, useState } from 'react';
import { CryptoContext, CryptoContextType } from './CreateContext';

// Хук для зручного доступу до контексту
export const useCrypto = (): CryptoContextType => {
    const context = useContext(CryptoContext);
    if (!context) {
        throw new Error('useCrypto must be used within a CryptoProvider');
    }
    return context;
};
// Toggle  FavoriteCoins Hooks
export const useToggleFavoriteCoins = () => {
    const [favoriteCoinsId, setFavoriteCoinsId] = useState<string[]>(() => {
        const stored = localStorage.getItem('favoriteCoins');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoriteCoins', JSON.stringify(favoriteCoinsId));
    }, [favoriteCoinsId]);

    const setToggleFavoriteCoin = (
        e: React.MouseEvent<SVGSVGElement>,
        coinId: string
    ) => {
        e.stopPropagation();

        setFavoriteCoinsId((prevFavorites) =>
            prevFavorites.includes(coinId)
                ? prevFavorites.filter((id) => id !== coinId)
                : [...prevFavorites, coinId]
        );
    };

    return { setToggleFavoriteCoin, favoriteCoinsId };
};
