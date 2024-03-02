import { db } from "@/db"
import { getSelf } from "./getSelf"

export const hasFollowed = async (userId: string) => {

    const selfId = await getSelf()

    if (selfId) {
        const hasFollowed = await db.query.followTable.findFirst({
            where(fields, operators) {
                return operators.and(operators.eq(fields.followerId, selfId), operators.eq(fields.followingId, userId))
            },
        })

        if (hasFollowed) {
            return true
        }

        else {
            return false
        }
    }



}