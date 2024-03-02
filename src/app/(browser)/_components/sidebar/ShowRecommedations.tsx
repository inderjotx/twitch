'use client'
import { UserProfileImage } from '@/components/UserProfileImage'
import { Button } from '@/components/ui/button'
import { User } from '@/db'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/useSidebar'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query';
import { LiveBadge } from './LiveBadge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export function Reco({ data }: { data: User[] }) {

    const isMobile = useMediaQuery('(max-width: 768px)');
    const isWrapped = useSidebar((store) => store.isWrapped)
    const [hasMounted, setMounted] = useState<boolean>(false)

    const currentPath = usePathname()
    console.log(currentPath)


    useEffect(() => {
        setMounted(true)
    }, [])


    if (!hasMounted) {
        return <></>
    }



    return (
        <ul className='flex flex-col items-start gap-2'>
            {data.length > 0 &&
                <div className={cn('text-sm text-muted-foreground ml-2 hidden  ', !isWrapped && "md:block")} >
                    Recommentations
                </div>
            }

            {
                data.map((user) => (
                    <Link key={user.id} href={`/${user.username}`} >
                        <div key={user.id} className={cn('flex items-center cursor-pointer hover:bg-foreground/5 p-1 px-2 rounded-md  gap-2 ', !isWrapped && "md:w-[180px]", (`/${user.username}` === currentPath && "bg-foreground/5"))} >
                            <div className='relative'>
                                <UserProfileImage
                                    url={user.image || ""}
                                    username={user.username || ""}
                                    key={user.id}
                                    className={cn(false && "ring-2 ring-red-500",)}
                                />
                                {

                                }
                                {
                                    false &&
                                    <LiveBadge />
                                }
                            </div>

                            {
                                !isWrapped &&
                                <div className='text-[12px] w-full truncate hidden md:block' >{(!isMobile) && user.username}</div>
                            }

                        </div>
                    </Link>

                ))
            }
        </ul>
    )
}
