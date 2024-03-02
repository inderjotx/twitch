"use server"

import { getSelf } from "@/lib/getSelf"


export const followUser = async (userId: string) => {

    const selfId = await getSelf()

} 