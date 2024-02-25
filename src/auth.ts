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
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id
            return session;
        },

    }
    // pages: {
    //     signIn: "/signIn"
    // }
},
)


