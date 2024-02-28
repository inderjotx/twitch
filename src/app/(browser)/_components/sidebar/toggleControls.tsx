import { MyToolTip } from '@/components/Providers/ToolTip'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/store/useSidebar'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import React from 'react'

export function ToggleControls() {

    const { isWrapped, toggleWrap } = useSidebar((store) => store)
    const label = isWrapped ? "Expand SideBar" : "Collapse SideBar"

    return (

        <Button variant={"ghost"} size={"icon"} className='hidden md:block ml-auto' onClick={toggleWrap} >

            {
                isWrapped ?
                    <MyToolTip tip={label} side='left' align='center' asChild={true} >
                        <ArrowRightFromLine className='size-5' />
                    </MyToolTip>
                    :
                    <MyToolTip tip={label} side='left' align='center' asChild={true} >
                        <ArrowLeftFromLine className='size-5' />
                    </MyToolTip>
            }
        </Button>
    )
}
