import {NextResponse} from "next/server";

export async function GET(Request: Request) {
    return NextResponse.json({hello: "world"} )
}