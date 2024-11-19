const { NextResponse } = require("next/server")

export const GET = async (request, response) => {
    const {id} = await response.params;

    return NextResponse.json({
        result: "hello",
        data: +id
    });
};