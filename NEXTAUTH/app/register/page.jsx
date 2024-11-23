"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";


function Register() {
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.push("/dashboard");
        }
    }, [sessionStatus, router]);

    async function handleSubmit(e){
        e.preventDefault();

        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirmPassword = e.target[3].value;

        if(!username || !email || !password || !confirmPassword){
            alert("Please fill all the input fields!");
            return;
        } else if(password != confirmPassword){
            alert("Passwords do not match!");
            return;
        }

        try{
            const response = await axios.post("/api/register", {email, password, confirmPassword})

            if(response.status == 400){
                alert("This email is already registered!");
            } else if(response.status == 201){
                router.push("/login");
            }
        } catch(err){
        console.error(err);
            alert(err.message);
        }
    }

    if(sessionStatus == "loading"){
        return <h1>Loading...</h1>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="confirmpass"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmpass"
                                name="confirmpass"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div><button className="mb-5 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button></div>
                        
                        <span>
                            Already have an account? {""}
                            <Link className="text-center text-blue-500 hover:underline mt-2" href="/Login">Login</Link>
                        </span>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
