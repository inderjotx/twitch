'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {
                pending ?
                    <Button disabled={pending} type="submit"
                        className='w-[140px]'
                    >
                        <div
                            className='animate-spin rounded-full  h-5 w-5 border-2 border-white border-b-0'
                        >
                        </div>
                    </Button>
                    :
                    <Button className='w-[140px]' size={"sm"} type="submit">Save Changes
                    </Button>
            }
        </>
    )
}
