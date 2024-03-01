import { auth } from "@/auth"
import { db } from "@/db"

export const getRecommendations = async () => {

    const session = await auth()
    const userId = session?.user?.id || null

    if (userId) {
        return await db.query.users.findMany({
            where(fields, operators) {
                return operators.ne(fields.id, userId)
            },
            limit: 10
        })

    }

    else {
        return await db.query.users.findMany({
            limit: 10
        })

    }



}