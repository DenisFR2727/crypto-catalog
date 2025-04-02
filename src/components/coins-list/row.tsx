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
type TimeFrameKey =
    | 'percent_change_15m'
    | 'percent_change_30m'
    | 'percent_change_1h'
    | 'percent_change_6h'
    | 'percent_change_12h'
    | 'percent_change_24h'
    | 'percent_change_7d'
    | 'percent_change_30d'
    | 'percent_change_1y';

const timeFrameMap: Record<string, TimeFrameKey> = {
    '15m': 'percent_change_15m',
    '30m': 'percent_change_30m',
    '1h': 'percent_change_1h',
    '6h': 'percent_change_6h',
    '12h': 'percent_change_12h',
    '24h': 'percent_change_24h',
    '7d': 'percent_change_7d',
    '30d': 'percent_change_30d',
    '1y': 'percent_change_1y',
};
export const Row = ({ index, style }: RowItem) => {
    const {
        filteredCoins,
        selectCoin,
        favoriteCoinsId,
        setToggleFavoriteCoin,
    } = useCrypto();

    const { setSelectedCoinModalInfo, setIsModalOpenInfo, selectedTimeFrame } =
        useCrypto();

    const coin = filteredCoins?.[index];

    if (!coin) return null;

    const key = timeFrameMap[selectedTimeFrame.label];
    const percentChange = coin.quotes.USD[key] ?? 0;
    const percentChangeColor =
        percentChange > 0 ? 'text-green-700' : 'text-red-700';

    const isFavorite = coin ? favoriteCoinsId.includes(coin.id) : false;

    const name = coin?.name ?? '';

    const displayName = name.length > 25 ? `${name.slice(0, 20)}...` : name;

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
                    <p className="p-2 flex  font-bold">{displayName}</p>
                    <p className={`${percentChangeColor} font-bold`}>
                        {percentChange}%
                    </p>
                </Button>
            </div>
        </div>
    );
};
