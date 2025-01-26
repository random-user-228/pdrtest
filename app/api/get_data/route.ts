import { NextResponse } from "next/server";
import { getData } from "@/db/data";
export async function GET(req:Request) {
    const data = await getData()
    return NextResponse.json(data)
}