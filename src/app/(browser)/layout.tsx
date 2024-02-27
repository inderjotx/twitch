import { Navbar } from '@/components/ui/Navbar'
import React from 'react'

export default function layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />
            <div className='h-full mt-20'>
                {children}
            </div>
        </div>
    )
}
