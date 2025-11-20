"use client";

import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

import Icon from '@mdi/react';
import { mdiCurrencyUsd, mdiCurrencyUah, mdiCurrencyEur } from '@mdi/js';

type Accaunt = { cur: "USD" | "UAH" | "EUR"; balance: number, cur_icon: string };

const accaunts: Accaunt[] = [
    { cur: "USD", balance: 7550.55, cur_icon: mdiCurrencyUsd },
    { cur: "UAH", balance: 26544.95, cur_icon: mdiCurrencyUah },
    { cur: "EUR", balance: 2305.20, cur_icon: mdiCurrencyEur },
];

const Dashboard = () => {
    const [selected, setSelected] = useState<Accaunt>(accaunts[0]);

    return (
        <div className="w-full h-full p-16 flex flex-col gap-16">
            <div className="w-full h-1/2 flex flex-row gap-16">
                <div className="w-1/2 rounded-4xl p-[1px] bg-gradient-to-br from-[#007bf5] to-[#00f5d4]">
                    <div className="h-full rounded-4xl bg-blk backdrop-blur-xl p-9 flex flex-col justify-between">
                        <div className="flex flex-row gap-3 w-full">
                            <p className="opacity-50">Balance</p>

                            <div className="relative inline-block text-left">
                                <Menu>
                                    <MenuButton className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 cursor-pointer">
                                        {selected.cur}
                                        <ChevronDownIcon className="size-4 fill-white/60" />
                                    </MenuButton>

                                    <MenuItems
                                        transition
                                        anchor="bottom"
                                        className="w-32 origin-top rounded-xl border border-white/5 bg-neutral-900 p-1 text-sm text-white transition duration-100 ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                                    >
                                        {accaunts.map((item, i) => (
                                            <MenuItem key={i}>
                                                <button
                                                    onClick={() => setSelected(item)}
                                                    className={`group flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-300 ${selected.cur === item.cur ? "bg-prl" : "hover:bg-white/5"
                                                        }`}
                                                >
                                                    <Icon path={item.cur_icon} size={0.75} className="opacity-50" />
                                                    <p className="text-center">{item.cur}</p>
                                                </button>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>

                        <div className="flex flex-row items-center w-full text-6xl">
                            <Icon path={selected.cur_icon} size={2.5} />
                            <h1>{selected.balance.toLocaleString("fr-FR")}</h1>
                        </div>

                        <div className="flex flex-row gap-5">
                            <button className="border border-prl w-36 h-16 rounded-2xl font-semibold text-prl">Send</button>
                            <button className="bg-prl w-36 h-16 rounded-2xl font-semibold text-shadow-wht hover:shadow-prl transition-all duration-150 cursor-pointer">Add</button>
                        </div>
                    </div>
                </div>

                {/* <div className="w-1/2 rounded-4xl p-[1px] bg-gradient-to-br from-[#007bf5] to-[#7f00f5]">
                    <div className="h-full rounded-4xl bg-blk/90 backdrop-blur-xl p-9 flex flex-col justify-between">
                        Recent transactions
                    </div>
                </div> */}

                <div className="w-1/2 rounded-4xl border border-white/30 p-5">
                    <div className="h-full rounded-3xl bg-white/5 backdrop-blur-xl p-9 flex flex-col justify-between">
                        Recent transactions
                    </div>
                </div>
            </div>

            <div className="w-full h-1/2 p-9 outline outline-mnt rounded-4xl">
                Analytics
            </div>
            {/* <div className="relative rounded-2xl p-px bg-linear-to-br from-mnt to-[#9b5de5]">
                <div className="rounded-2xl bg-blk/90 backdrop-blur-xl p-6">
                    
                    <h2 className="text-wht text-lg font-semibold">Main balance</h2>
                    <p className="text-3xl font-bold">$12,539.00</p>
                </div>
            </div> */}
        </div>
    )
}

export default Dashboard;