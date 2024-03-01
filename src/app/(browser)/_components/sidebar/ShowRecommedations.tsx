'use client'
import { UserProfileImage } from '@/components/UserProfileImage'
import { Button } from '@/components/ui/button'
import { User } from '@/db'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/useSidebar'
import React from 'react'
import { useMediaQuery } from '@react-hook/media-query';
import { LiveBadge } from './LiveBadge'


export function Reco({ data }: { data: User[] }) {

    const isMobile = useMediaQuery('(max-width: 768px)');
    const isWrapped = useSidebar((store) => store.isWrapped)


    return (
        <ul className='flex flex-col items-start gap-4'>
            <div className={cn('text-sm text-muted-foreground ml-2 hidden  ', !isWrapped && "md:block")} >
                Recommentations
            </div>

            {
                data.map((user) => (
                    <div key={user.id} className={cn('flex items-center cursor-pointer hover:bg-foreground/5 p-1 rounded-md  gap-2 ', !isWrapped && "md:w-[180px]")} >
                        <div className='relative'>
                            <UserProfileImage
                                url={user.image || ""}
                                username={user.username || ""}
                                isActive={false}
                                key={user.id}
                                className={cn("ring-2  ring-red-500")}
                            />
                            <LiveBadge />
                        </div>

                        {
                            !isWrapped &&
                            <div className='text-[12px] w-full truncate hidden md:block' >{(!isMobile) && user.username}</div>
                        }


                    </div>

                ))
            }
        </ul>
    )
}
