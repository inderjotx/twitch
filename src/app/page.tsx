import { auth, signIn, signOut } from "@/auth";

export default async function Home() {

  const session = await auth()

  return (
    <div className="">
      something
      {session?.user?.name}
    </div>

  )
}
