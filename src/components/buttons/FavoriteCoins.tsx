import { useState } from 'react';
import { useCrypto } from '../../context/hooks';
import './style.css';

function FavoriteCoins() {
    const { setIsFavoriteCoinsList } = useCrypto();
    const [hoverState, setHoverState] = useState<boolean>(false);

    const favoriteCoin = () => {
        setHoverState((prev) => !prev);
        setIsFavoriteCoinsList((prev: boolean) => !prev);
    };

    return (
        <button
            className={`favorite-btn-coin ${hoverState ? 'yellow' : 'white'}`}
            onClick={favoriteCoin}
            onMouseEnter={favoriteCoin}
        >
            FavoriteCoins
        </button>
    );
}
export default FavoriteCoins;
