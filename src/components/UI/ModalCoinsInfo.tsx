import { Modal } from 'antd';
import { CoinChart } from '../coin-chart/Coin-Chart';

import { useCrypto } from '../../context/hooks';

import 'antd/dist/reset.css';
import './style.css';

export const ModalCoinsInfo = () => {
    const {
        selectedCoinModalInfo,
        setSelectedCoinModalInfo,
        isModalOpenInfo,
        setIsModalOpenInfo,
    } = useCrypto();

    const handleOk = () => {
        setIsModalOpenInfo(false);
        setSelectedCoinModalInfo(null);
    };

    const handleCancel = () => {
        setIsModalOpenInfo(false);
        setSelectedCoinModalInfo(null);
    };

    if (!selectedCoinModalInfo) return null;

    return (
        <div>
            <Modal
                title={`Coin: ${selectedCoinModalInfo.name}`}
                open={isModalOpenInfo}
                onOk={handleOk}
                onCancel={handleCancel}
                style={{ top: 450 }}
            >
                <p>
                    <strong>Symbol:</strong> {selectedCoinModalInfo.symbol}
                </p>
                <p>
                    <strong>Price (USD):</strong> $
                    {selectedCoinModalInfo.quotes.USD.price.toFixed(2)}
                </p>
                <p>
                    <strong>Change 24h:</strong>{' '}
                    {selectedCoinModalInfo.quotes.USD.percent_change_24h}%
                </p>
                <CoinChart />
            </Modal>
        </div>
    );
};
