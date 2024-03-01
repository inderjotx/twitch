import { Navbar } from '@/components/ui/Navbar'
import { Sidebar } from "./_components/sidebar/index"
import React, { Suspense } from 'react'
import { ContentWrapper } from './_components/sidebar/ContentWrapper'
import { SkeletonSideBar } from './_components/sidebar/SideBarSkeleton'

export default function layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />
            <div className='relative h-full'>
                <Suspense fallback={<SkeletonSideBar />} >
                    <Sidebar />
                    <ContentWrapper>
                        {children}
                    </ContentWrapper>
                </Suspense>
            </div>
        </div>
    )
}
