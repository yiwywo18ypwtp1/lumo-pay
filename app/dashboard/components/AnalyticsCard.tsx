import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, CartesianGrid } from "recharts";


type AnalyticsCardProps = {
    data: { date: string, amount: number }[];
};

const AnalyticsCard = ({ data }: AnalyticsCardProps) => {
    return (
        <div className="h-full w-full">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="2 3" strokeWidth={0.1} />

                    <XAxis dataKey="date" />
                    <YAxis width="auto" />

                    <Tooltip
                        contentStyle={{
                            background: "#111",
                            border: "1px solid #ff006e40",
                            borderRadius: "8px",
                            color: "white",
                        }}
                        cursor={{
                            stroke: "#ff006e",
                            strokeWidth: 1,
                            strokeOpacity: 0.9,
                        }}
                    />

                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#ff006e" floodOpacity="0.5" />
                            <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="#ff006e" floodOpacity="0.2" />
                        </filter>
                    </defs>

                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#ff006e"
                        strokeWidth={3}
                        dot={true}
                        activeDot={{ r: 6 }}
                        filter="url(#glow)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AnalyticsCard;
