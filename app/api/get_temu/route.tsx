
import { NextResponse } from "next/server";
import { getTemu } from "@/db/data";
export async function GET(req:Request) {
    const temu = await getTemu()
    return NextResponse.json(temu)
}