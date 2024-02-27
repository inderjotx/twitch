
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function UserProfileImage({ username, url, className }: {
    url: string
    , username: string
    , className?: string
}) {
    return (
        <Avatar className={className} >
            <AvatarImage className="" src={url} alt={"@" + username} />
            <AvatarFallback>{username.substring(0, 3)}</AvatarFallback>
        </Avatar>
    )
}
