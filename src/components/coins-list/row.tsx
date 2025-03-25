import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCrypto } from '../../context/hooks';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

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

    const coin = filteredCoins?.[index];

    const percentChange = coin?.quotes.USD.percent_change_24h ?? 0;

    const percentChangeColor =
        percentChange > 0 ? 'text-green-500' : 'text-red-500';

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
                <p className="p-2 flex">{coin?.name}</p>
                <p className={percentChangeColor}>{percentChange}%</p>
            </div>
        </div>
    );
};
