"use client";

import { useState } from 'react'

import { mdiCurrencyUsd, mdiCurrencyUah, mdiCurrencyEur } from '@mdi/js';
import AnalyticsCard from './components/AnalyticsCard';
import BalanceCard from './components/BalanceCard';

import type { Accaunt } from '@/types/accaunt';
import RecentTransactionsCard from './components/RecentTransactionsCard';


const accaunts: Accaunt[] = [
    { cur: "USD", balance: 7550.55, cur_icon: mdiCurrencyUsd },
    { cur: "UAH", balance: 26544.95, cur_icon: mdiCurrencyUah },
    { cur: "EUR", balance: 2305.20, cur_icon: mdiCurrencyEur },
];

const lastWeekSpendings = {
    USD: [
        { date: "Mon", amount: 295 },
        { date: "Tue", amount: 180 },
        { date: "Wed", amount: 1070 },
        { date: "Tru", amount: 254 },
        { date: "Fri", amount: 527 },
        { date: "Sun", amount: 922 },
        { date: "Sat", amount: 95 },
    ],
    UAH: [
        { date: "Mon", amount: 720 },
        { date: "Tue", amount: 271 },
        { date: "Wed", amount: 1070 },
        { date: "Tru", amount: 254 },
        { date: "Fri", amount: 1460 },
        { date: "Sun", amount: 680 },
        { date: "Sat", amount: 505 },
    ],
    EUR: [
        { date: "Mon", amount: 512 },
        { date: "Tue", amount: 1621 },
        { date: "Wed", amount: 928 },
        { date: "Tru", amount: 124 },
        { date: "Fri", amount: 365 },
        { date: "Sun", amount: 2254 },
        { date: "Sat", amount: 890 },
    ]
};

const Dashboard = () => {
    const [selected, setSelected] = useState<Accaunt>(accaunts[0]);

    const analyticsData = lastWeekSpendings[selected.cur];

    return (
        <div className="w-full h-full p-16 flex flex-col justify-between">
            <div className="w-full min-h-[46%] h-[46%] flex flex-row justify-between">
                <div className="min-w-[48%] w-[48%] rounded-4xl border border-white/25 p-4">
                    <div className="h-full rounded-3xl bg-neutral-500/10 p-7 flex flex-col justify-between">
                        <BalanceCard accaunts={accaunts} selected={selected} setSelected={setSelected} />
                    </div>
                </div>

                <div className="min-w-[48%] w-[48%] max-h-full rounded-4xl border border-white/25 p-4">
                    <div className="h-full rounded-3xl bg-neutral-500/10 p-7 flex flex-col gap-3">
                        <div className="w-full flex justify-between items-center">
                            <p className="text-lg">Recent transactions</p>

                            <div className="text-sm flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline transition-all cursor-pointer">
                                <p>To transactions</p>
                                <img src="/svg2/view-more.svg" alt="" className="h-5" />
                            </div>
                        </div>

                        <RecentTransactionsCard />
                    </div>
                </div>
            </div>

            <div className="w-full min-h-[46%] h-[46%] rounded-4xl border border-white/25 p-4">
                <div className="h-full rounded-3xl bg-neutral-500/10 p-7 flex flex-col gap-3 justify-between">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-lg">Spendings for last 7 days</p>

                        <div className="text-sm flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline transition-all cursor-pointer">
                            <p>To analytics</p>
                            <img src="/svg2/view-more.svg" alt="" className="h-5" />
                        </div>
                    </div>

                    <AnalyticsCard data={analyticsData} />
                </div>
            </div>
        </div >
    );
}

export default Dashboard;