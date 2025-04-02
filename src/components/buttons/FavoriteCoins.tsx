import { useState } from 'react';
import { useCrypto } from '../../context/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
            {hoverState && (
                <FontAwesomeIcon className="favorite-icon" icon={faStar} />
            )}
            <span className="favorite-btn-text align-middle">
                FavoriteCoins
            </span>
        </button>
    );
}
export default FavoriteCoins;
