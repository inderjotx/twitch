CREATE TABLE IF NOT EXISTS "followers" (
	"followerId" text,
	"followingId" text,
	CONSTRAINT "followers_followerId_followingId_pk" PRIMARY KEY("followerId","followingId")
);
--> statement-breakpoint
DROP TABLE "follow";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "follow_idx" ON "followers" ("followerId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "follwing_idx" ON "followers" ("followingId");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followers" ADD CONSTRAINT "followers_followerId_user_id_fk" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followers" ADD CONSTRAINT "followers_followingId_user_id_fk" FOREIGN KEY ("followingId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
