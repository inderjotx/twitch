import { db } from "@/db"

export const getRecommendations = async () => {

    const response = await (new Promise((res) => { setTimeout(res, 5000) }))

    return await db.query.users.findMany({
        limit: 10
    })

}