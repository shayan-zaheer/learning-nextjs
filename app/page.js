"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // from next/navigation
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({subsets: ["latin"], weight: "500"});

function Home() {
    return (
        <section>
            <h1>useRouter</h1>
            <div className={`flex p-6 gap-6 ${roboto.className}`}>
                <button className="border px-2 py-4">
                    <Link href="/projects">Go to Projects Page</Link>
                </button>
                <button
                    className="border px-2 py-4"
                    onClick={() => route("users")}
                >
                    Go to Users Page
                </button>
                <button
                    className="border px-2 py-4"
                    onClick={() => route("login")}
                >
                    Go to Login Page
                </button>
                <button
                    className="border px-2 py-4"
                    onClick={() => route("register")}
                >
                    Go to Register Page
                </button>
            </div>
        </section>
    );
}

export default Home;
