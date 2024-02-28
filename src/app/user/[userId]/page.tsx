import { signOut } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { User, db } from "@/db"
import { users } from "@/db/schema/users"
import { eq } from "drizzle-orm"
import { X } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"


export default async function User({ params }: { params: { userId: string } }) {

    if (!params.userId) {
        redirect('/')
        return
    }

    const user = await db.query.users.findFirst({
        where(fields, operators) {
            return operators.eq(fields.id, params.userId)
        },
    })


    if (!user) {
        redirect('/')
        return
    }



    return (
        <Dialog open >
            <DialogContent className="sm:max-w-[300px]">
                <DialogHeader >
                    <DialogTitle className="relative flex" >User Info
                        <Link href={'/'} className="absolute right-0 top-0" >
                            <X className="size-5" ></X>
                        </Link>
                    </DialogTitle>
                </DialogHeader>
                <div className="w-full flex gap-2 flex-col items-center">
                    <Avatar className="size-20"  >
                        <AvatarImage src={user.image || ""} alt={"@" + user.username || ""} />
                        <AvatarFallback>{user.username?.substring(0, 3)}</AvatarFallback>
                        <AvatarImage></AvatarImage>
                    </Avatar>
                    <div>
                        {user.username}
                    </div>
                    <Button className="w-full" variant={"outline"} type="button">
                        <Link href={`/user/${params.userId}/settings`} >
                            Edit
                        </Link>
                    </Button>
                    <form className="w-full" action={async () => {
                        "use server"
                        await signOut()
                        redirect('/')
                    }}  >
                        <Button className="w-full" variant={"outline"} type="submit">Log Out</Button>
                    </form>

                    <form className="w-full" action={async () => {
                        "use server"
                        await db.delete(users).where(eq(users.id, params.userId))
                        redirect('/')
                    }}  >
                        <Button className="w-full" variant={"destructive"} type="submit">Delete Account</Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

