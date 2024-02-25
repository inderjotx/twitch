import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth, signIn } from './auth'

export async function middleware(request: NextRequest) {


    // trying to access private route , but not authenticated 
    const session = await auth()

    if (session) {
        await signIn()
    }

}


// mathc only private routes 
export const config = {
    matcher: '/private ',
}