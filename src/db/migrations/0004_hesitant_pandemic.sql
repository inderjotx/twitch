ALTER TABLE "follow" DROP CONSTRAINT "follow_followerId_followingId_pk";--> statement-breakpoint
ALTER TABLE "follow" ADD COLUMN "id" integer NOT NULL;