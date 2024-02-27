'use client'
import React, { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import toast from 'react-hot-toast'

export function SubmitButton() {
    const { pending } = useFormStatus()
    const [clicked, setClicket] = useState(false)


    useEffect(() => {

        if (!pending && clicked) {
            toast.success("User Data Update Successfully")
            setClicket(false)
        }
    }, [pending, clicked])

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
                    <Button onClick={() => setClicket(true)} className='w-[140px]' size={"sm"} type="submit">Save Changes
                    </Button>
            }
        </>
    )
}
