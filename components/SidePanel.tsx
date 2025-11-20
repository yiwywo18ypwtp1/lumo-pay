"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PAGES = [
    { name: "Dashboard", icon: "svg2/dashboard.svg" },
    { name: "Analytics", icon: "svg2/analytics.svg" },
    { name: "Transactions", icon: "svg2/transactions.svg" },
    { name: "Accaunts", icon: "svg2/accaunts-2.svg" },
    { name: "Goals", icon: "svg2/goals.svg" },
]

const SidePanel = () => {
    const router = useRouter();
    const [selectedPage, setSelectedPage] = useState<string>('Dashboard');

    const handleSwitch = (name: string) => {
        setSelectedPage(name);
        router.push(`/${name.toLowerCase()}`)
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-1/5 bg-transparent rounde shadow-mnt border-r border-mnt">
            <div className="flex flex-col w-fit justify-evenly h-full">
                {PAGES.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => handleSwitch(item.name)}
                        className={`w-full flex flex-col items-center justify-center p-6 rounded-3xl ${selectedPage === item.name ? "border border-mnt scale-105 drop-shadow-wht" : "bg-white/5 border border-transparent"} cursor-pointer transition-all duration-500`}
                    >
                        <img src={`${item.icon}`} className={`h-12 mb-1 `} />
                        <b>{item.name}</b>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SidePanel;