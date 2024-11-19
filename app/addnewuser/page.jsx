"use client";

import { useRef } from "react";
import axios from "axios";

function AddNewUser() {
    async function handleSubmit(){
        let name = nameRef.current.value;
        let age = ageRef.current.value;
        let email = emailRef.current.value;

        let response = await axios.post("/api/users", {name, age, email});
        console.log(response);
    }

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const emailRef = useRef(null);
    return (
        <>
            <input placeholder="Enter your name" type="text" ref={nameRef} />
            <input placeholder="Enter your age" type="number" ref={ageRef} />
            <input placeholder="Enter your email" type="email" ref={emailRef} />

            <button onClick={handleSubmit}>Click Me!</button>
        </>
    );
}

export default AddNewUser;
