import { signOut } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { User, db } from "@/db"
import { users } from "@/db/schema/users"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"
import { UserProfileImage } from "./UserProfileImage"
import { UpdateUserInfo } from "./UpdateUserInfo"


export function UserInfoButton({ user }: { user: User }) {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <UserProfileImage
                    className='size-8'
                    variant={"default"}
                    isActive={false}
                    url={user.image || ""} username={user.username || "shad"}  ></UserProfileImage>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[300px]">
                <DialogHeader >
                    <DialogTitle className="relative flex" >User Info
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
                    <UpdateUserInfo user={user} />
                    <form className="w-full" action={async () => {
                        "use server"
                        await signOut()
                        redirect('/')
                    }}  >
                        <Button className="w-full" variant={"outline"} type="submit">Log Out</Button>
                    </form>

                    <form className="w-full" action={async () => {
                        "use server"
                        await db.delete(users).where(eq(users.id, user.id))
                        redirect('/')
                    }}  >
                        <Button className="w-full" variant={"destructive"} type="submit">Delete Account</Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

