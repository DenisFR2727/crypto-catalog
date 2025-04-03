import { useState } from 'react';
import { useCrypto } from '../../context/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import { Button } from 'antd';

function FavoriteCoins() {
    const { setIsFavoriteCoinsList } = useCrypto();
    const [hoverState, setHoverState] = useState<boolean>(false);

    const favoriteCoin = () => {
        setHoverState((prev) => !prev);
        setIsFavoriteCoinsList((prev: boolean) => !prev);
    };

    return (
        <Button
            className={`favorite-btn-coin ${hoverState ? 'yellow' : 'white'}`}
            onClick={favoriteCoin}
            onMouseEnter={favoriteCoin}
            icon={
                hoverState && (
                    <FontAwesomeIcon className="favorite-icon" icon={faStar} />
                )
            }
            size="large"
        >
            <span className={`favorite-btn-text `}>FavoriteCoins</span>
        </Button>
    );
}
export default FavoriteCoins;
