"use client";

import { useRef, useState, useEffect, act } from "react";
import { useRouter } from "next/navigation";

const PAGES = [
    { name: "Dashboard", icon: "/svg2/dashboard.svg" },
    { name: "Analytics", icon: "/svg2/analytics.svg" },
    { name: "Transactions", icon: "/svg2/transactions.svg" },
    { name: "Accaunts", icon: "/svg2/accaunts-2.svg" },
    { name: "Settings", icon: "/svg2/settings.svg" },
]

const SidePanel = () => {
    const router = useRouter();
    const [active, setActive] = useState(0);

    const refs = useRef<(HTMLButtonElement | null)[]>([]);
    const [pos, setPos] = useState({ top: 0, height: 0 });


    useEffect(() => {
        const el = refs.current[active];

        if (el === null) return;
        setPos({
            top: el.offsetTop,
            height: el.offsetHeight
        });

        router.push(`/${PAGES[active].name.toLowerCase()}`);
    }, [active]);

    return (
        <div className="w-1/5 h-screen px-20 py-16 border-r border-mnt flex items-center">
            <div className="w-full h-full rounded-4xl bg-neutral-500/10 p-4">
                <div className="relative flex flex-col h-full justify-between">
                    <div
                        className="absolute left-0 right-0 rounded-3xl border border-mnt-darker shadow-mnt z-0 transition-all duration-500"
                        style={{ top: pos.top, height: pos.height }}
                    />

                    {PAGES.map((item, i) => (
                        <button
                            key={i}
                            ref={(el) => { (refs.current[i] = el) }}
                            onClick={() => setActive(i)}
                            className="
                                relative z-10
                                flex flex-col items-center justify-center
                                aspect-square
                                w-full
                                max-h-[140px] 
                                rounded-3xl
                                transition-all
                            "
                        >
                            <img src={item.icon} className="h-12 w-12 mb-1" />
                            <b className="text-sm">{item.name}</b>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SidePanel;