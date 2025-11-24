"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";


const Header = () => {
    const router = useRouter();

    const [user, setUser] = useState<any>(null);
    const [displayName, setDisplayName] = useState<string>("");

    useEffect(() => {
        const loadUser = async () => {
            const { data } = await supabase.auth.getUser();

            if (!data.user) return;

            const { data: profile } = await supabase
                .from("users")
                .select("display_name")
                .eq("id", data.user.id)
                .single();

            if (profile) {
                console.log("display_name " + profile.display_name);
                setDisplayName(profile.display_name);
            }

            setUser(data?.user);
        };

        loadUser();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/auth/login");
    };

    return (
        <header className="flex flex-row items-center justify-between w-full px-12 min-h-28">
            <div
                onClick={() => router.push("/dashboard")}
                className="flex flex-row items-center gap-3 drop-shadow-wht cursor-pointer hover:drop-shadow-none transition-all duration-300"
            >
                <img src="/svg/lumo-lg.png" className="h-10" />
                <h1 className="text-4xl">
                    LumoPay
                </h1>
            </div>

            <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center gap-2">
                    {user ? (
                        <>
                            <button
                                onClick={handleLogout}
                                className="opacity-60 underline hover:opacity-100 transition"
                            >
                                Log out
                            </button>

                            <p>|</p>

                            <div className="flex flex-row items-center gap-2 p-1 hover:bg-white/15 cursor-pointer rounded-full transition-all duration-300">
                                <span>{displayName ? displayName : user.email}</span>
                                <img src="/svg2/user.svg" className="h-8" />
                            </div>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => router.push("/auth/login")}
                                className="opacity-60 underline hover:opacity-100 transition"
                            >
                                Log in
                            </button>

                            <p>|</p>

                            <div className="flex flex-row items-center gap-2 p-1 hover:bg-white/15 cursor-pointer rounded-full transition-all duration-300">
                                <span>Guest</span>
                                <img src="/svg2/user.svg" className="h-8" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header >
    );
}

export default Header;