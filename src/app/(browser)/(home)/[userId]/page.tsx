import { Button } from '@/components/ui/button'
import { hasFollowed } from '@/lib/hasFollow'
import React from 'react'

export default async function page({ params }: { params: { userId: string } }) {


    // follow or unfollow button , 
    const { userId } = params


    // has followed 
    const isBeingFollowed = await hasFollowed(userId)


    // follow or unfollow function


    return (
        <Button>
            {isBeingFollowed ? "UnFollow" : "Follow"}
        </Button>
    )
}
