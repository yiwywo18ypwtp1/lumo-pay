import { supabase } from "@/lib/supabaseClient";

export async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return { data, error };
}

export async function signup(email: string, displayName: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: "http://localhost:3000/auth/confirm",
            data: {
                display_name: name,
            }
        }
    });

    return { data, error };
}