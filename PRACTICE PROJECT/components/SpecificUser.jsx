"use client";
import { Button, Card, Input, List, ListItem } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";

function SpecificUser() {
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        const result = await axios.get(`/api/users/${userId}`);
        setUserData(result?.data?.data);
    };

    return (
        <div>
            <div className="flex">
                <div className="w-72">
                    <Input
                        label="Enter User ID"
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />

                    <Button onClick={fetchUserData}>Fetch User</Button>
                </div>
                {userData ? (
                    userData.map(data => {
                        return <>
                            <Card key={data.id} className="w-96 mt-5">
                                <List>
                                    <ListItem>Name: {data.name}</ListItem>
                                </List>
                            </Card>
                        </>
                    })
                ) : (
                    <p className="mt-2">Search for a specific user!</p>
                )}
            </div>
        </div>
    );
}

export default SpecificUser;
