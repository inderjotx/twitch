'use client'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/useSidebar'
import React from 'react'
import { ToggleControls } from './toggleControls'

export function Wrapper({ children }: {
    children: React.ReactNode
}) {

    const isWrapped = useSidebar((store) => store.isWrapped)

    return (
        <div className={cn('fixed pt-3 items-center left-0  flex flex-col bg-slate-100 h-full',
            isWrapped ? "w-16" : "md:w-[200px]")}>
            <div className='w-full'>
                <ToggleControls />
            </div>
            {children}
        </div>
    )
}
