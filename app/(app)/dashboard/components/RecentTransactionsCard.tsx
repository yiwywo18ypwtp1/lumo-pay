import Transaction from "@/components/Transaction";


const spendings = [
    {
        name: "Silpo UA",
        icon: "shopping-cart",
        category: "Groceries",
        color: "#FFA94D",
        date: "23-11-2025",
        type: "expense",
        amount: 944,
        currency: "UAH",
    },
    {
        name: "PayPal Inc.",
        icon: "deposit",
        category: "Deposit",
        color: "#47A3FF",
        date: "22-11-2025",
        type: "income",
        amount: 2000,
        currency: "EUR",
    },
    {
        name: "GEORGE GINA & LUCY ® Official",
        icon: "shopping-bag",
        category: "Shopping",
        color: "#F06595",
        date: "09-11-2025",
        type: "expense",
        amount: 130,
        currency: "USD",
    },
    {
        name: "Veronika H.",
        icon: "expense",
        category: "Personal Transfer",
        color: "#555",
        date: "14-11-2025",
        type: "expense",
        amount: 1250,
        currency: "UAH",
    },
]

const RecentTransactionsCard = () => {
    return (
        <div className="max-h-48 flex flex-col gap-3 overflow-y-scroll scroll-hide">
            {spendings.map((item: any, i: number) => (
                <Transaction
                    key={i}
                    name={item.name}
                    icon={item.icon}
                    category={item.category}
                    color={item.color}
                    date={item.date}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />
            ))}
        </div>
    );
}

export default RecentTransactionsCard;