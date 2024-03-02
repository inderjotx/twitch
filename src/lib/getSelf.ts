import { auth } from "@/auth"


export const getSelf = async () => {

    const session = await auth()
    return session?.user?.id || null
}