-- CreateEnum
CREATE TYPE "SendType" AS ENUM ('member', 'non_member');

-- CreateTable
CREATE TABLE "SendList" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "ip" VARCHAR(45) NOT NULL,
    "sentStatus" BOOLEAN NOT NULL DEFAULT false,
    "sendType" "SendType" NOT NULL,

    CONSTRAINT "SendList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpamList" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "ip" VARCHAR(45) NOT NULL,
    "blocked" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SpamList_pkey" PRIMARY KEY ("id")
);
