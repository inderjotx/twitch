import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { db } from "@/db"
import { getUsername } from "./lib/generate-username"
import { users } from "./db/schema/users"
import { eq } from "drizzle-orm"


const addUsername = async (id: string) => {
    const hasUsername = await db.query.users.findFirst({
        where(fields, operators) {
            return operators.eq(fields.id, id)
        },
    })

    console.log(hasUsername)

    if (hasUsername && !hasUsername.username && hasUsername.name) {
        const username = getUsername(hasUsername.name)
        await db.update(users).set({ username: username }).where(eq(users.id, id))
        return username
    }

    return hasUsername?.username

    // if not create
}


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
        async session({ session, user, token }) {
            session.user.id = user.id
            // @ts-ignore
            await addUsername(user.id)
            return session;
        },

        async jwt({ user, token }) {
            const id = user.id
            console.log(id)
            if (id) {

            }
            return token

        },

    }
    //     signIn: "/signIn"
    // }
},
)


