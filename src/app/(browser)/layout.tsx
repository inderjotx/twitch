import { Navbar } from '@/components/ui/Navbar'
import { Sidebar } from "./_components/sidebar/index"
import React from 'react'
import { ContentWrapper } from './_components/sidebar/ContentWrapper'

export default function layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />
            <div className='relative h-full'>
                <Sidebar />
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </div>
        </div>
    )
}
