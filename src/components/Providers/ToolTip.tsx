import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface ToolTipProps {
    children: React.ReactNode,
    tip: string,
    asChild: boolean,
    align: "start" | "center" | "end",
    side: "top" | "right" | "bottom" | "left"
}


export function MyToolTip({
    children,
    tip,
    asChild,
    align,
    side
}: ToolTipProps) {
    return (
        <TooltipProvider delayDuration={0} >
            <Tooltip>
                <TooltipTrigger asChild={asChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent align={align} side={side}   >
                    <p>{tip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
