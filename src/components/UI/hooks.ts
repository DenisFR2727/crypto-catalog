import { useCrypto } from '../../context/hooks';

export const useModalCoinInfo = () => {
    const { selectedCoinModalInfo, setIsModalOpenInfo } = useCrypto();

    if (!selectedCoinModalInfo) return null;

    const handleOk = () => {
        setIsModalOpenInfo(false);
    };

    const handleCancel = () => {
        setIsModalOpenInfo(false);
    };
    return { handleOk, handleCancel };
};
