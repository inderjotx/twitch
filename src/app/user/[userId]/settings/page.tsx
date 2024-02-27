import { User, db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'
import { X } from 'lucide-react'
import Link from 'next/link'
import { SubmitButton } from '@/components/SubmitButton'
import { users } from '@/db/schema/users'
import { eq } from 'drizzle-orm'


export default async function page({ params }: {
    params: { userId: string }
}) {

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
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader  >
                    <DialogTitle className='flex relative' >Edit profile
                        <Link href={'/'} >
                            <span>
                                <X className='size-5 absolute right-0'></X>
                            </span>
                        </Link>
                    </DialogTitle>
                    <DialogDescription className='text-left'>
                        Update Your profile
                    </DialogDescription>
                </DialogHeader>

                <form action={async (formData: FormData) => {
                    "use server"
                    const username = formData.get("username")
                    const bio = formData.get("bio")

                    if (username && bio) {
                        //@ts-ignore
                        await db.update(users).set({ username: username, bio: bio }).where(eq(users.id, params.userId))
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
