import { Navbar } from '@/components/ui/Navbar'
import { Sidebar } from "./_components/sidebar/index"
import React from 'react'

export default function layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />
            <div className='relative h-full'>
                <Sidebar />
                {children}
            </div>
        </div>
    )
}
