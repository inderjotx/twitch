CREATE TABLE IF NOT EXISTS "follow" (
	"follow" text,
	CONSTRAINT "follow_follow_follow_pk" PRIMARY KEY("follow","follow")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "follow_idx" ON "follow" ("follow");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "follwing_idx" ON "follow" ("follow");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "follow" ADD CONSTRAINT "follow_follow_user_id_fk" FOREIGN KEY ("follow") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
