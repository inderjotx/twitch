import { User, db } from '@/db'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'
import { SubmitButton } from '@/components/SubmitButton'
import { users } from '@/db/schema/users'
import { eq } from 'drizzle-orm'
import { Button } from './ui/button'
import { revalidateTag } from 'next/cache'


export function UpdateUserInfo({ user }: { user: User }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full" variant={"outline"} type="button">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader  >
                    <DialogTitle className='flex relative' >Edit profile
                    </DialogTitle>
                    <DialogDescription className='text-left'>
                        Update Your profile
                    </DialogDescription>
                </DialogHeader>

                <form action={async (formData: FormData) => {
                    "use server"
                    const username = formData.get("username")
                    const bio = formData.get("bio")

                    console.log(username)
                    console.log(bio)

                    if (username || bio) {
                        //@ts-ignore
                        await db.update(users).set({ username: username, bio: bio }).where(eq(users.id, user.id))
                        revalidateTag('userInfo')
                    }
                }}
                >
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                defaultValue={user.username || ""}
                                className="col-span-3"
                                name="username"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="bio" className="text-right">
                                Bio
                            </Label>
                            <Textarea
                                id="bio"
                                defaultValue={user.bio || ""}
                                className="col-span-3"
                                name="bio"
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <SubmitButton />
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}
