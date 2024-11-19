import { NextResponse } from "next/server";
import { users } from "@/app/util/db";

export function GET() {
    const data = users;

    return NextResponse.json(
        {
            result: data,
        },
        { status: 200 }
    );
}

export const POST = async (request, response) => {
    const { name, age, email } = await request.json();

    if (!name || !age || !email) {
        return NextResponse.json(
            { error: "Required fields not found!", ok: false },
            { status: 400 }
        );
    }

    return NextResponse.json(
        {
            response: "Credentials verified! User created!",
            ok: true,
        },
        { status: 201 }
    );
};