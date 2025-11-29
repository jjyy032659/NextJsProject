"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const navLinks = [
    { name: "Forgot Password", path: "/forgot-password" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },

]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [input, setInput] = useState("");

    return (
        <div>
            <div><input value={input} onChange={(e) => setInput(e.target.value)}></input></div>

            <nav>
                <ul>
                    {navLinks.map((link) => {

                        const isActive = pathname.startsWith(link.path)
                        return (
                            <li key={link.name}>
                                <Link href={link.path} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            {children}
        </div>
    )
}