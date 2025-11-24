"use client";

import Header from "@/components/Header";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen items-center justify-center">
            <Header />
            {children}
        </div>
    );
}