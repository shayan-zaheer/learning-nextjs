"use client";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

function DeleteUser({ deleteUser }) {
    const [id, setId] = useState("");

    const handleDelete = async () => {
        await axios.delete("/api/users", { data: {id} });
        deleteUser(id);
    };

    return (
        <div>
            <Input
                label="Enter User ID"
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />

            <Button onClick={handleDelete}>Delete User</Button>
        </div>
    );
}

export default DeleteUser;
