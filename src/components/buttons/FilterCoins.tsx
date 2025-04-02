import React from 'react';
import { Select } from 'antd';
import { useCrypto } from '../../context/hooks';

const FilterCoins: React.FC = () => {
    const { selectedTimeFrame, setSelectedTimeFrame } = useCrypto();

    const timeframes = [
        { label: '15m', value: '15m' },
        { label: '30m', value: '30m' },
        { label: '1h', value: '1h' },
        { label: '6h', value: '6h' },
        { label: '12h', value: '12h' },
        { label: '24h', value: '24h' },
        { label: '7d', value: '7d' },
        { label: '30d', value: '30d' },
        { label: '1y', value: '1y' },
    ];
    const handleSelect = (value: string) => {
        const selected = timeframes.find((tf) => tf.value === value);
        if (selected) {
            setSelectedTimeFrame(selected);
        }
    };
    return (
        <>
            <Select
                style={{ width: '70px' }}
                placeholder="Select a coin"
                onSelect={handleSelect}
                filterOption={(input, option) => {
                    let _a;
                    return (
                        (_a =
                            option === null || option === void 0
                                ? void 0
                                : option.label) !== null && _a !== void 0
                            ? _a
                            : ''
                    )
                        .toLowerCase()
                        .includes(input.toLowerCase());
                }}
                value={selectedTimeFrame.value}
                optionFilterProp="label"
                options={timeframes}
            />
        </>
    );
};
export default FilterCoins;
