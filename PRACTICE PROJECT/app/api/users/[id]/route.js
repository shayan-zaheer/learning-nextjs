import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

// 2. User Data

export async function GET(request, response){
    const {id} = await response.params;
    const data = users.filter(user => user.id == id);

    return NextResponse.json({data}, {status: 200});
};

// 3. Login

export async function POST(request, response){
    let {name, email, password} = await request.json();
    const {id} = await response.params;
    
    const {name: uName, email: uEmail, password: uPassword} = users.find(user => user.id == id);

    if(uName == name && uEmail == email && uPassword == password){
        return NextResponse.json({
            result: "Successfully logged in!"
        }, {status: 200});
    } else if(!name || !email || !password){
        return NextResponse.json({result: "Please fill all the input fields!"}, {status: 400});
    } else {
        return NextResponse.json({result: "Invalid Credentials!"}, {status: 400});
    }
};