'use client'
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/store/useSidebar";
import { useMediaQuery } from '@react-hook/media-query';

export function SkeletonSideBar() {

    return (
        <>
            <div className={cn('flex flex-col items-start  md:items-center pt-4 pl-3  h-full w-[180px] gap-2 ',
            )}>
                <div className="flex items-start md:items-center gap-1" >
                    <Skeleton className="size-8 rounded-full" />
                    <Skeleton className="hidden md:block h-4 w-[100px]" />
                </div>
                <div className="flex items-start md:items-center gap-1" >
                    <Skeleton className="size-8 rounded-full" />
                    <Skeleton className="hidden md:block h-4 w-[100px]" />
                </div>
                <div className="flex items-start md:items-center gap-1" >
                    <Skeleton className="size-8 rounded-full" />
                    <Skeleton className="hidden md:block h-4 w-[100px]" />
                </div>
            </div>
        </>
    )
}



