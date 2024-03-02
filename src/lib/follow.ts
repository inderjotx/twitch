import { db } from "@/db"
import { getSelf } from "./getSelf"
import { followTable } from "@/db/schema/users"



export const follow = async (userId: string) => {

    try {
        const selfId = await getSelf()

        // can't follow user self
        if (selfId === userId) {
            console.log("Can't follow userself")
            return false
        }


        // check if the userId is valid 
        const isUser = await db.query.users.findFirst({
            where(fields, operators) {
                return operators.eq(fields.id, userId)
            },
        })


        if (!isUser) {
            console.log("Invalid userId , No user with this id exist")
            return false
        }

        await db.insert(followTable).values({ followerId: selfId, followingId: userId })



    }
    catch (err) {
        console.log("Server Error")
        console.log(err)
        return false
    }



}