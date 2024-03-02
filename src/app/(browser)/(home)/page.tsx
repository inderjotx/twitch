import { auth, signIn, signOut } from "@/auth";

export default async function Home() {

  const session = await auth()

  return (
    <div className="">
      {session?.user?.name}
    </div>
  )
}
