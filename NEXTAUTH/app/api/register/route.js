import User from "@/models/User";
import connectDB from "@/config/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request, response) => {
    const {  email, password, confirmPassword } = await request.json();

    if (password != confirmPassword) {
        return NextResponse.json(
            {
                error: "Passwords do not match",
            },
            { status: 400 }
        );
    }

    await connectDB();
    const existingUser = await User.findOne({email});
    if(existingUser){
        return new NextResponse(JSON.stringify({error: "User already exists"}), {status: 400});
    } // when using only NextResponse, not NextResponse.json, use new with it

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        email, password: hashedPassword
    });

    try{
        await newUser.save();
        return new NextResponse("User successfully registered!", {status: 201});
    } catch(err){
        return new NextResponse(err, {status: 500});
    };
};
