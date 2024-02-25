import { auth, signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function page() {

    const session = await auth()

    if (session) {
        redirect('/')
    }



    return (
        <div>
            This is signIn page
            <form action={async () => {
                "use server"
                await signIn('github', {
                    callbackUrl: "/",
                })
            }} >
                <Button type='submit' className='gap-2'>
                    <Github className='size-5'></Github>
                    <span>Sign In </span>
                </Button>
            </form>
        </div>
    )
}
