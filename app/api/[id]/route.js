import { NextResponse } from "next/server";

export function GET(request, response){
    return NextResponse.json({
        result: "success",
        id: +response.params.id
    });
}