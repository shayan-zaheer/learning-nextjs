"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import AllUsers from "./AllUsers";
import SpecificUser from "./SpecificUser";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

function AccordionUI() {
    const [open, setOpen] = useState(0);
    const [users, setUsers] = useState([]);

    const addUser = (id, name, email, password) => {
        setUsers(prev => [...prev, {id, name, email, password}])
    }

    const putUser = (id, name, email, password) => {
        let userArray = users;
        let user = users.findIndex(user => user.id == id);
        let updatedUser = {id, name, email, password};
        userArray[user] = updatedUser;
        setUsers(userArray);
    }

    const deleteUser = id => {
        let updatedUsers = users.filter(user => user.id != id);
        setUsers(updatedUsers);    
    }

    useEffect(() => {
        const fetchAllUsers = async() => {
            const result = await axios.get("/api/users");
            setUsers(result?.data?.data);
        }

        fetchAllUsers();
    }, [users.length]);

    return (
        <section className="w-[40rem]">
            <Accordion open={open == 1}>
                <AccordionHeader onClick={() => setOpen(1)}>
                    All Users
                </AccordionHeader>

                <AccordionBody>
                    <AllUsers users={users}/>
                </AccordionBody>             
            </Accordion>

            <Accordion open={open == 2}>
                <AccordionHeader onClick={() => setOpen(2)}>
                    Specific User
                </AccordionHeader>

                <AccordionBody>
                    <SpecificUser />
                </AccordionBody>             
            </Accordion>

            <Accordion open={open == 3}>
                <AccordionHeader onClick={() => setOpen(3)}>
                    Create New User
                </AccordionHeader>

                <AccordionBody>
                    <CreateUser addUser={addUser}/>
                </AccordionBody>             
            </Accordion>

            <Accordion open={open == 4}>
                <AccordionHeader onClick={() => setOpen(4)}>
                    Update User
                </AccordionHeader>

                <AccordionBody>
                    <UpdateUser putUser={putUser}/>
                </AccordionBody>             
            </Accordion>

            <Accordion open={open == 5}>
                <AccordionHeader onClick={() => setOpen(5)}>
                    Delete User
                </AccordionHeader>

                <AccordionBody>
                    <DeleteUser deleteUser={deleteUser}/>
                </AccordionBody>             
            </Accordion>
        </section>
    );
}

export default AccordionUI;
