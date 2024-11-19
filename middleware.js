import { NextResponse } from "next/server";

export const middleware = (request) => {
    if(request.nextUrl.pathname != "/login"){
        return NextResponse.redirect(new URL("/login", request.url));
    }

    console.log("middleware ran");
    return NextResponse.json({
        success: "successfuly ran"
    });
};

export const config = {
    matcher: ["/userslist/:path"]
}