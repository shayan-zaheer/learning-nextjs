"use client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";

function CreateUser({addUser}) {
    async function createUser(){
        await axios.post("/api/users", {id, name, email, password});
        addUser({id, name, email, password});
    }

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    return (
        <div className="w-72 space-y-6">
            <Input
                label="Enter User ID"
                type="number"
                value={id}
                onChange={e => setId(e.target.value)}
                required
            />
            <Input
                label="Enter Name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <Input
                label="Enter Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <Input
                label="Enter Password"
                type="password"
                value={password}
                onChange={e => setPass(e.target.value)}
                required
            />

            <Button onClick={createUser}>Create User</Button>
        </div>
    );
}

export default CreateUser;
