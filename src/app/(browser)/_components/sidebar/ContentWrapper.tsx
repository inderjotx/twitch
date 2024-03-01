'use client'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/useSidebar'
import React from 'react'

export function ContentWrapper({ children }: { children: React.ReactNode }) {

    const isWrapped = useSidebar((store) => store.isWrapped)

    return (
        <div
            className={cn("ml-16", isWrapped ? "ml-16" : "md:ml-[200px]")}
        >
            {children}
        </div>
    )
}
