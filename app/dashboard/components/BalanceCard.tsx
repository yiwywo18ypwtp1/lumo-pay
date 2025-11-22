import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Icon from '@mdi/react';

import type { Accaunt } from "@/types/accaunt";


type BalanceCardProps = {
    accaunts: Accaunt[];
    selected: Accaunt;
    setSelected: (item: Accaunt) => void;
}

const BalanceCard = ({ accaunts, selected, setSelected }: BalanceCardProps) => {
    return (
        <>
            <div className="flex flex-row items-center gap-3 w-full">
                <p className="opacity-50 text-lg">Balance</p>

                <div className="relative inline-block text-left">
                    <Menu>
                        <MenuButton className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 cursor-pointer">
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
                <button className="w-32 h-13 rounded-xl scd-btn-mnt">
                    Send
                </button>

                <button className="w-32 h-13 rounded-xl prm-btn-mnt">Add</button>
            </div>
        </>
    );
}

export default BalanceCard;