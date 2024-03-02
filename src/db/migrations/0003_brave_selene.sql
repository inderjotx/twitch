ALTER TABLE "follow" RENAME COLUMN "follow" TO "followerId";--> statement-breakpoint
ALTER TABLE "follow" DROP CONSTRAINT "follow_follow_user_id_fk";
--> statement-breakpoint
DROP INDEX IF EXISTS "follow_idx";--> statement-breakpoint
DROP INDEX IF EXISTS "follwing_idx";--> statement-breakpoint
ALTER TABLE "follow" DROP CONSTRAINT "follow_follow_follow_pk";--> statement-breakpoint
ALTER TABLE "follow" ADD CONSTRAINT "follow_followerId_followingId_pk" PRIMARY KEY("followerId","followingId");--> statement-breakpoint
ALTER TABLE "follow" ADD COLUMN "followingId" text;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "follow_idx" ON "follow" ("followerId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "follwing_idx" ON "follow" ("followingId");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "follow" ADD CONSTRAINT "follow_followerId_user_id_fk" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "follow" ADD CONSTRAINT "follow_followingId_user_id_fk" FOREIGN KEY ("followingId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
