import { auth } from "@/auth";
import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {

    const session = await auth()


    const user = await db.query.users.findFirst({
        where(fields, operators) {
            return operators.eq(fields.id, params.userId)
        },
    })


    if (!user) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    return NextResponse.json(user, { status: 200 })


}