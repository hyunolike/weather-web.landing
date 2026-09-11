-- AlterTable
ALTER TABLE "SendList" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SpamList" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "SendList_email_key" ON "SendList"("email");

-- CreateIndex
CREATE INDEX "SendList_ip_createdAt_idx" ON "SendList"("ip", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "SpamList_email_key" ON "SpamList"("email");

-- CreateIndex
CREATE INDEX "SpamList_ip_idx" ON "SpamList"("ip");

