"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function useProfile() {
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        async function load() {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const { data } = await supabase
                .from("users")
                .select("*")
                .eq("id", user.id)
                .single();

            setProfile(data);
        }

        load();
    }, []);

    return profile;
}