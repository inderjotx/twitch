import { db } from "@/db"

export const getRecommendations = async () => {

    return await db.query.users.findMany({
        limit: 10
    })

}