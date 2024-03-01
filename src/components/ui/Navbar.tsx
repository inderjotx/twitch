import { auth, signIn, signOut } from '@/auth'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import { UserProfileImage } from '../UserProfileImage'
import { Ghost, Clapperboard, ClapperboardIcon } from 'lucide-react'
import { SearchBar } from '../SearchBar'
import { UserInfoButton } from '../UserInfoButton'
import { User } from '@/db'

export async function Navbar() {

    const session = await auth()
    const userId = session?.user?.id

    let user: (User | null) = null

    if (userId) {
        const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
            next: {
                tags: ['userInfo']
            }
        })
        const data = await response.json()
        if (response.status == 200) {

            user = data
            console.log("user data from the route handler")
            console.log(user)
        }
    }


    return (
        <div className='flex h-16 sticky top-0  w-full z-40 px-3 py-2 justify-between border-b border-black items-center
        '>
            <Link href={'/'} className='mx-3' >
                <div className='text-lg  flex items-center gap-6 font-semibold'>
                    <Ghost />
                    <span className='hidden lg:block'>
                        Spooky
                    </span>
                </div>
            </Link>
            <SearchBar />
            <div className='flex gap-4 ml-4 items-center '>
                <div className='flex items-center gap-2  transition-all '>
                    <ClapperboardIcon />
                    <span className='lg:block hidden text-sm' >Dashboard</span>
                </div>
                {
                    user ?
                        <div className='flex gap-2'>
                            <UserInfoButton user={user} />
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
