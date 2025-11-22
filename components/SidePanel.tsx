"use client";

import { useRef, useState, useEffect, act } from "react";
import { useRouter } from "next/navigation";

const PAGES = [
    { name: "Dashboard", icon: "svg2/dashboard.svg" },
    { name: "Analytics", icon: "svg2/analytics.svg" },
    { name: "Transactions", icon: "svg2/transactions.svg" },
    { name: "Accaunts", icon: "svg2/accaunts-2.svg" },
    { name: "Settings", icon: "svg2/settings.svg" },
]

const SidePanel = () => {
    const router = useRouter();
    const [active, setActive] = useState(0);

    const refs = useRef<(HTMLDivElement | null)[]>([]);
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
        <div className="flex flex-col justify-center items-center min-h-screen w-1/5 bg-transparent rounde shadow-mnt border-r border-mnt">
            <div className="bg-neutral-500/10 rounded-4xl p-3">
                <div className="flex flex-col gap-6 w-fit h-fit justify-evenly relative">
                    <div
                        className="absolute bottom-0 bg-mnt-darker shadow-mnt rounded-3xl z-0 transition-all ease-in-out duration-500"
                        style={{
                            top: pos.top,
                            height: pos.height,
                            width: "100%",
                            transform: `translateY(0)`
                        }}
                    />

                    {PAGES.map((item, i) => (
                        <div
                            ref={(el) => { (refs.current[i] = el) }}
                            key={i}
                            onClick={() => setActive(i)}
                            className={`flex flex-col items-center justify-center p-6 h-36 w-36 z-10 cursor-pointer rounded-3xl transition-all`}>
                            <img src={`${item.icon}`} className={`h-12 mb-1`} />
                            <b>{item.name}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SidePanel;