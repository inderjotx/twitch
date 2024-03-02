ALTER TABLE "followers" DROP COLUMN IF EXISTS "id";
ALTER TABLE "followers" ADD CONSTRAINT "followers_followerId_followingId_pk" PRIMARY KEY("followerId","followingId");--> statement-breakpoint