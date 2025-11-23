type TransactionProps = {
    name: string;
    icon: string;
    category: string;
    color: string;
    date: string;
    type: "income" | "expense";
    amount: number;
    currency: "USD" | "UAH" | "EUR";
}

const Transaction = ({ name, icon, category, color, date, type, amount, currency }: TransactionProps) => {
    return (
        <div className="w-full max-h-16 flex items-center justify-between p-2 rounded-2xl bg-white/5 hover:bg-white/15 transition-all cursor-pointer">
            <div className="flex max-w-1/2 min-w-1/2 gap-3">
                <div
                    className="rounded-xl p-1"
                    style={{ backgroundColor: color || "#444" }}
                >
                    <img src={`/svg2/categoies/${icon}.svg`} alt="" className="h-10 w-10 max-w-10 max-h-10" />
                </div>

                <div className="flex flex-col max-w-2/3 w-2/3">
                    <h1 className="truncate">{name}</h1>
                    <span className="text-sm opacity-35 truncate">{category}</span>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-between">
                <div>
                    <p className="text-sm opacity-20">{date}</p>
                </div>

                <div>
                    {type === "income"
                        ? <p className="text-cyn text-sm xl:text-base">+{amount} {currency}</p>
                        : <p className="text-rd text-sm xl:text-base">-{amount} {currency}</p>

                    }
                </div>
            </div>
        </div >
    );
};

export default Transaction;