import { auth, signIn, signOut } from '@/auth'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import { UserProfileImage } from '../UserProfileImage'
import { Ghost } from 'lucide-react'
import { SearchBar } from '../SearchBar'

export async function Navbar() {

    const session = await auth()
    const isLoggedIn = session ? true : false

    return (
        <div className='flex fixed top-0 w-full z-40 px-3 py-2 justify-between border-b border-black items-center
            mb-2
        '>
            <Link href={'/'} >
                <div className='text-lg flex items-center gap-1 font-semibold'>
                    <Ghost />
                    Spooky
                </div>
            </Link>
            <div className='flex gap-4'>
                <SearchBar />
                {
                    isLoggedIn ?
                        <div className='flex gap-2'>
                            <Link href={`/user/settings/${session!.user!.id}`} >
                                <UserProfileImage
                                    url={session?.user?.image || ""} username={session?.user?.name || "shad"}  ></UserProfileImage>
                            </Link>
                            <form action={async () => {
                                "use server"
                                await signOut()
                            }} >
                                <Button type='submit' size={"sm"} className='rounded-[20px] px-4' >Sign Out</Button>
                            </form>
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
