ALTER TABLE "followers" DROP CONSTRAINT "followers_followerId_followingId_pk";--> statement-breakpoint
ALTER TABLE "followers" ADD COLUMN "id" integer NOT NULL;