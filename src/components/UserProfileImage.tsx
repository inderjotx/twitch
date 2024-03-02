import { cva, type VariantProps } from "class-variance-authority"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils"


interface avatarProps extends VariantProps<typeof avatarVariants> {
    username: string,
    url: string,
    className?: string
}





const avatarVariants = cva(
    "",
    {
        variants: {

            variant: {
                default: ""
            }
            ,

            size: {
                default: "size-8",
                lg: "size-10",
                sm: "size-6"

            }

        }
        ,

        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)



export function UserProfileImage({ username, url, className, size, variant }: avatarProps) {
    return (
        <Avatar className={cn(avatarVariants({ variant, size, className }))} >
            <AvatarImage src={url} alt={"@" + username} />
            <AvatarFallback>{username.substring(0, 3)}</AvatarFallback>
        </Avatar>
    )
}
