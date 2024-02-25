import { auth, signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Ghost, Github, X } from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { redirect } from "next/navigation"

const font = Poppins({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "700", "800"]
})

export default async function SignInIntercepted() {

    const session = await auth()

    if (session) {
        redirect('/')
    }



    return (
        <Dialog open  >
            <DialogContent className={cn("sm:max-w-[425px] space-y-4 ", font.className)}>
                <DialogHeader className="space-y-2">
                    <div className="flex justify-center relative">
                        <div className="text-xl font-semibold  flex justify-center">
                            Spooky
                        </div>
                        <DialogClose className="absolute right-0" >
                            <Link href={'/'} >
                                <X className="size-4" ></X>
                            </Link>
                        </DialogClose>
                    </div>
                    <div className="flex justify-center" >
                        <Ghost className="size-8" ></Ghost>
                    </div>
                </DialogHeader>
                <form
                    action={async () => {
                        "use server"
                        await signIn('github', {
                            callbackUrl: "/",
                        })

                        redirect('/')

                    }} >
                    <Button type='submit' className='gap-2 w-full'>
                        <Github className='size-4'></Github>
                        <span>Sign In </span>
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
