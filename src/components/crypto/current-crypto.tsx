import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import './current-crypto.css';
import { useCrypto } from '../../context/hooks';

function CurrentCrypto() {
    const { coins, generalCoins, selectCurrentCoin } = useCrypto();
    const flatCoins = coins?.flat(Infinity);
    const firstCoin = flatCoins?.[0];

    return (
        <div className="coin-general-block flex justify-start items-center p-4 ">
            <div className="coin-general-text text-cyan-50">
                <div className="text-[30px]">
                    {generalCoins ? firstCoin?.name : selectCurrentCoin?.name}{' '}
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <div className="text-[20px]">
                    {generalCoins
                        ? firstCoin?.symbol
                        : selectCurrentCoin?.symbol}
                </div>
                <div className="coins_info">
                    <p className="separator text-[20px]">
                        Price:
                        <span className="flex text-[17px]">
                            {generalCoins
                                ? firstCoin?.quotes.USD.price.toFixed(0)
                                : `${selectCurrentCoin?.quotes.USD.price.toFixed(
                                      0
                                  )} `}
                            <span className="exchange text-[12px]">USD</span>
                        </span>
                    </p>
                    <p className="separator text-[20px]">
                        Market_cap:{' '}
                        <span className="text-[17px]">
                            {' '}
                            {generalCoins
                                ? firstCoin?.quotes.USD.market_cap
                                : selectCurrentCoin?.quotes.USD.market_cap}
                            <span className="exchange text-[12px]">USD</span>
                        </span>
                    </p>
                    <p className="separator text-[20px]">
                        Volume_24:{' '}
                        <span className="text-[17px]">
                            {' '}
                            {generalCoins
                                ? firstCoin?.quotes.USD.volume_24h
                                : selectCurrentCoin?.quotes.USD.volume_24h}
                            <span className="exchange text-[12px]">USD</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default CurrentCrypto;
