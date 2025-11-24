"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmPage() {
    const router = useRouter();

    useEffect(() => {
        const run = async () => {
            const { data: { user } } = await supabase.auth.getUser();

            if (user) {
                const displayName = user.user_metadata?.display_name || "New User";

                await supabase.from("users").upsert({
                    id: user.id,
                    display_name: displayName,
                });

                router.replace("/dashboard");
            }
        };

        run();
    }, []);

    return <div className="text-center">Confirming your account...</div>;
}