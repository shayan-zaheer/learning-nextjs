"use client";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import React from "react";

function UpdateUser({putUser}) {
    async function updateUser(){
        await axios.put("/api/users", {id, name, email, password});
        putUser(id, name, email, password);
    }

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    return (
        <div className="w-72 space-y-4">
            <Input
                label="Enter User ID"
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <Input
                label="Enter Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <Input
                label="Enter Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                label="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                required
            />

            <Button onClick={updateUser}>Update User</Button>
        </div>
    );
}

export default UpdateUser;
