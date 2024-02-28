'use client'
import { UserProfileImage } from '@/components/UserProfileImage'
import { Button } from '@/components/ui/button'
import { User } from '@/db'
import React from 'react'

export function Reco({ data }: { data: User[] }) {



    return (
        <ul className='flex flex-col'>
            {
                data.map((user) => (
                    <Button key={user.id} variant={"ghost"} >
                        <UserProfileImage
                            url={user.image || ""}
                            username={user.username || ""}
                            isActive={false}
                            key={user.id}
                        />
                    </Button>

                ))
            }
        </ul>
    )
}
