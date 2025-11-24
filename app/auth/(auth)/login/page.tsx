"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const Auth = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleLogin = async () => {
        setError("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            return;
        }

        router.push("/dashboard");
    };

    return (
        <div className="h-[calc(100%-7rem)] w-full flex flex-col items-center justify-center overflow-visible">
            <h1 className="text-4xl opacity-50 mb-4">Welcome back</h1>

            <div className="w-110 border border-white/25 bg-transparent rounded-3xl p-6 z-10 backdrop-blur-lg">
                <div className="flex flex-col items-center justify-between h-full gap-8 *:w-full bg-neutral-900/85 p-3 rounded-2xl">
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="rounded-xl border border-transparent bg-neutral-500/10 hover:bg-neutral-500/25 p-4 h-12 focus:outline-none focus:border focus:border-mnt transition-all duration-300"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="rounded-xl border border-transparent bg-neutral-500/10 hover:bg-neutral-500/25 p-4 h-12 focus:outline-none focus:border focus:border-mnt transition-all duration-300"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-between items-center px-2">
                        <p className="opacity-50 text-sm text-center hover:opacity-100 pointer-events-none transition-all">Remember me for 7 days</p>
                        <input type="checkbox" className="h-4 w-4 rounded-full appearance-none border border-gray-500 checked:bg-prl checked:border checked:border-prl checked:rounded-sm transition-all duration-300 cursor-pointer" />
                    </div>

                    <div className="w-full items-center flex flex-col gap-3">
                        <h1 className="text-rd animate-pulse z-10">{error}</h1>

                        <button
                            onClick={handleLogin}
                            className={`${email && password ? "prm-btn-mnt cursor-pointer" : "scd-btn-mnt"} rounded-xl p-2 w-full flex items-center justify-center`}
                        >
                            <img src="/svg2/arrow-right.svg" alt="" className="h-7" />
                        </button>

                        <div className="flex justify-center gap-2 w-full text-sm">
                            <p className="opacity-100 hover:opacity-100 ">Not a member yet?</p>
                            <p
                                onClick={() => router.push("/auth/signup")}
                                className="text-prl opacity-50 hover:opacity-100 underline transition-all cursor-pointer"
                            >
                                Sign up
                            </p>
                        </div>
                    </div>
                </div>
            </div >

            <img src="/svg2/waves.svg" alt="" className="absolute bottom-0 z-0" />
        </div >
    );
}

export default Auth;