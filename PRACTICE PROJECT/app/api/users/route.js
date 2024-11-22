import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 1. All Users Data

export function GET(){
    const data = users;

    return NextResponse.json({
        data
    }, {status: 200});
};

export async function POST(request, response){
    let {id, name, email, password} = await request.json();

    if(!id || !name || !email || !password){
        return NextResponse.json({
            result: "Please fill all the fields!"
        }, {status: 400});
    } else {
        users.push({
            id, name, email, password
        });
    }

    const updatedUsers = users;

    const updatedData = JSON.stringify(updatedUsers, null, 2);

    fs.writeFileSync("./app/util/db.js", `export const users = ${updatedData}`, "utf-8");

    return NextResponse.json({success: "User successfully created!"})
};

// 5. Update User

export async function PUT(request, response){
    let {id, name, email, password} = await request.json();
    const userIndex = users.findIndex(user => user.id == id);

    if(userIndex == -1){
        return NextResponse.json({result: "User not found!"}, {status: 404});
    } 

    if(name){
        users[userIndex].name = name;
    }

    if(email){
        users[userIndex].email = email;
    }

    if(password){
        users[userIndex].password = password;
    }

    const updatedUsers = users;
    const updatedData = JSON.stringify(updatedUsers, null, 2);

    fs.writeFileSync("./app/util/db.js", `export const users = ${updatedData}`, "utf-8");

    return NextResponse.json({
        success: "User successfully updated!"
    });
}

export async function DELETE(request, response){
    let updatedUsers = users;

    let {id} = await request.json();

    updatedUsers = updatedUsers.filter(user => user.id != id);

    const updatedData = JSON.stringify(updatedUsers, null, 2);
    fs.writeFileSync("./app/util/db.js", `export const users = ${updatedData}`, "utf-8");
    
    return NextResponse.json({
        success: "User successfully deleted!"
    });
}