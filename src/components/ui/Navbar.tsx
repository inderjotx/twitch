import { auth, signOut } from '@/auth'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'

export async function Navbar() {

    const session = await auth()
    const isLoggedIn = session ? true : false

    return (
        <div className='flex px-3 py-2 justify-between border-b border-black items-center
            mb-2
        '>
            <div className='text-lg font-semibold'>StreamX</div>
            <div>
                {
                    isLoggedIn ?
                        <form action={async () => {
                            "use server"
                            await signOut()
                        }} >
                            <Button type='submit' size={"sm"} >Sign Out </Button>
                        </form>
                        :
                        <Link href={'/signIn'} >
                            <Button type='submit' size={"sm"} >Sign In</Button>
                        </Link>
                }
            </div>
        </div>
    )
}
