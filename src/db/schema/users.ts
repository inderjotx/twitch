import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    index
} from "drizzle-orm/pg-core"
import type { AdapterAccount } from '@auth/core/adapters'
import { relations } from "drizzle-orm"
import { use } from "react"

export const users = pgTable("user", {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    username: text("username"),
    bio: text("bio"),
})

export const accounts = pgTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<AdapterAccount["type"]>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => ({
        compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }),
    })
)

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").notNull().primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
    "verificationToken",
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (vt) => ({
        compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
    })
)



export const followTable = pgTable(
    "followers", {
    // person who is following 
    followerId: text("followerId").references(() => users.id, { onDelete: "cascade" }),

    // person who is being followed 
    followingId: text("followingId").references(() => users.id, { onDelete: "cascade" })
}
    ,
    (table) => {
        return {
            pk: primaryKey({ columns: [table.followerId, table.followingId] }),
            followIndex: index("follow_idx").on(table.followerId),
            follwingIndex: index("follwing_idx").on(table.followingId),
        }
    }

)


export const userRfollow = relations(users, ({ many }) => ({
    followers: many(followTable, { relationName: "followers" }),
    following: many(followTable, { relationName: "following" })
})
)


export const followRuser = relations(followTable, ({ one }) => ({
    followedBy: one(users, {
        relationName: "followers",
        fields: [followTable.followerId],
        references: [users.id]
    })
    ,
    beingFollowed: one(users, {
        relationName: "following",
        fields: [followTable.followingId],
        references: [users.id]
    })
    ,
}))




