import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCrypto } from '../../context/hooks';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

import './coins-list.css';

type RowItem = {
    index: number;
    style: React.CSSProperties | undefined;
};

export const Row = ({ index, style }: RowItem) => {
    const {
        filteredCoins,
        selectCoin,
        favoriteCoinsId,
        setToggleFavoriteCoin,
    } = useCrypto();

    const { setSelectedCoinModalInfo, setIsModalOpenInfo } = useCrypto();

    const coin = filteredCoins?.[index];

    const percentChange = coin?.quotes.USD.percent_change_24h ?? 0;

    const percentChangeColor =
        percentChange > 0 ? 'text-green-700' : 'text-red-700';

    const isFavorite = coin ? favoriteCoinsId.includes(coin.id) : false;

    return (
        <div style={style} className="bg-gray-600">
            <div
                onClick={() => selectCoin(coin)}
                className="flex items-center font-bold p-2 start whitespace-nowrap overflow-hidden text-[#ffffff] hover:bg-slate-500 cursor-pointer"
            >
                <FontAwesomeIcon
                    className="p-2"
                    icon={isFavorite ? faSolidStar : faStar}
                    onClick={(e) => {
                        if (coin) {
                            setToggleFavoriteCoin(e, coin.id);
                        }
                    }}
                />
                <Button
                    type="default"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                    color="primary"
                    onClick={() => {
                        if (coin) {
                            setSelectedCoinModalInfo(coin);
                            setIsModalOpenInfo(true);
                        }
                    }}
                >
                    <p className="p-2 flex  font-bold">
                        {coin?.name.length > 25
                            ? coin?.name
                            : coin?.name.slice(0, 25)}
                    </p>
                    <p className={`${percentChangeColor} font-bold`}>
                        {percentChange}%
                    </p>
                </Button>
            </div>
        </div>
    );
};
