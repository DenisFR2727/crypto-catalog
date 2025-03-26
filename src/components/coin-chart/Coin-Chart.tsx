import { Button } from 'antd';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { useCrypto } from '../../context/hooks';
import { useState } from 'react';
import { prepareChartData } from '../../api/api';
import './coin-chart.css';

type TimeFrame = 'short' | 'mid' | 'long';

export const CoinChart = () => {
    const { selectedCoinModalInfo } = useCrypto();
    const [timeFrame, setTimeFrame] = useState<TimeFrame>('short');

    const chartData = prepareChartData(
        selectedCoinModalInfo?.quotes.USD,
        timeFrame
    );
    return (
        <div
            className="chart-wrapper"
            style={{ width: '80%', height: '500px' }}
        >
            <div
                className="btns-timeframe"
                title="Time-frame"
                style={{
                    width: '100%',
                    display: 'flex',
                    gap: 8,
                    marginBottom: 16,
                }}
            >
                <Button onClick={() => setTimeFrame('short')}>
                    Short (1h–24h)
                </Button>
                <Button onClick={() => setTimeFrame('mid')}>
                    Mid (7d–30d)
                </Button>
                <Button onClick={() => setTimeFrame('long')}>Long (1y)</Button>
            </div>
            <ResponsiveContainer>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis unit="%" />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="percent"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
