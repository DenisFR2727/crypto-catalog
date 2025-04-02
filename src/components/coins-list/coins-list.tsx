import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import SearchCoin from '../search-crypto/SearchCoin';
import FavoriteCoins from '../buttons/FavoriteCoins';
import { useCrypto } from '../../context/hooks';
import { Row } from './row';
import Modal from './Modal';
import { ModalCoinsInfo } from '../UI/ModalCoinsInfo';
import FilterCoins from '../buttons/FilterCoins';

import './coins-list.css';
function Coins() {
    const { isCoins, filteredCoins, setIsCoins } = useCrypto();
    const isModalOpen = isCoins || (filteredCoins && filteredCoins.length > 0);

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#4B5563',
            }}
        >
            <SearchCoin />
            <div className="btns-coins">
                <FavoriteCoins />
                <FilterCoins />
            </div>

            {isModalOpen && (
                <Modal onClose={() => setIsCoins(false)}>
                    <div className="modal-body-content w-full h-[500px]">
                        <AutoSizer>
                            {({ height, width }) => (
                                <div
                                    id="coins-general"
                                    className="is-coins-general"
                                >
                                    <ModalCoinsInfo />
                                    {isCoins ? (
                                        <div className="is-coins bg-gray-600 text-black text-center min-w-[300px] w-[100%] h-full flex items-center justify-center">
                                            No such coin has been found!
                                        </div>
                                    ) : (
                                        <List
                                            height={height}
                                            width={width}
                                            itemSize={50}
                                            itemCount={filteredCoins!.length}
                                        >
                                            {Row}
                                        </List>
                                    )}
                                </div>
                            )}
                        </AutoSizer>
                    </div>
                </Modal>
            )}
        </div>
    );
}
export default Coins;
