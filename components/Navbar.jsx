"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
    const pathname = usePathname();

    const getLinkClass = (linkPath) => {
        return pathname === linkPath
            ? "px-4 py-2 border border-black rounded"
            : "px-4 py-2 hover:bg-gray-700 transition duration-300";
    };

    return (
        <nav className="flex items-center justify-between py-4 px-8 bg-slate-800 text-white" role="navigation">
            <img src="/next.svg" alt="Next.js Logo" className="w-8 h-8" />
            <ul className="flex gap-4">
                <Link href="/login" passHref>
                    <li className={getLinkClass("/login")}>Login</li>
                </Link>
                <Link href="/login/loginadmin" passHref>
                    <li className={getLinkClass("/login/loginadmin")}>Login Admin</li>
                </Link>
                <Link href="/login/loginuser" passHref>
                    <li className={getLinkClass("/login/loginuser")}>Login User</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
