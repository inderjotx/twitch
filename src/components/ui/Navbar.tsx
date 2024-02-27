import { auth, signIn, signOut } from '@/auth'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import { UserProfileImage } from '../UserProfileImage'
import { Ghost, Clapperboard, ClapperboardIcon } from 'lucide-react'
import { SearchBar } from '../SearchBar'

export async function Navbar() {

    const session = await auth()
    const isLoggedIn = session ? true : false

    return (
        <div className='flex h-16 sticky top-0  w-full z-40 px-3 py-2 justify-between border-b border-black items-center
        '>
            <Link href={'/'} >
                <div className='text-lg flex items-center gap-1 font-semibold'>
                    <Ghost />
                    <span className='hidden lg:block'>
                        Spooky
                    </span>
                </div>
            </Link>
            <SearchBar />
            <div className='flex gap-4 items-center '>
                <div className='flex items-center gap-2 hover:text-foreground transition-all text-muted-foreground '>
                    <ClapperboardIcon className='size-8' />
                    <span className='lg:block hidden ' >Dashboard</span>
                </div>
                {
                    isLoggedIn ?
                        <div className='flex gap-2'>
                            <Link href={`/user/${session!.user!.id}/`} >
                                <UserProfileImage
                                    className='size-8'
                                    url={session?.user?.image || ""} username={session?.user?.name || "shad"}  ></UserProfileImage>
                            </Link>
                        </div>
                        :
                        <>
                            <form action={async () => {
                                "use server"
                                await signIn()
                            }} >
                                <Button type='submit' size={"sm"} className='rounded-[20px] px-4' >Sign In</Button>
                            </form>
                        </>
                }
            </div>
        </div>
    )
}
