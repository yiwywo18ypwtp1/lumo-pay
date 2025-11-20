const BALANCES = [
    { currency: "usd", symbol: "$", amount: 660 },
    { currency: "eur", symbol: "€", amount: 2090 },
    { currency: "uah", symbol: "₴", amount: 14211 }
];

const Balance = ({ cur }: { cur: string }) => {
    return (
        <div className=" rounded-lg">
            <div className="flex flex-row border border-mnt/75 rounded-lg">
                <div className="flex flex-row items-center gap-2 m-3">
                    <h1 className="opacity-50 bg-white/15 px-2 py-1 rounded-md">UAH</h1>
                    <p>13400</p>
                </div>
            </div>
        </div>
    );
}

export default Balance;