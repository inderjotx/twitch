import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { db } from "@/db"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })],
    adapter: DrizzleAdapter(db),
    // pages: {
    //     signIn: "/signIn"
    // }
},
)


