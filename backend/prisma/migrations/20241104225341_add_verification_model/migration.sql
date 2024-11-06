/*
  Warnings:

  - Added the required column `attemptType` to the `LoginAttempt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authenticatorId` to the `Passkey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `counter` to the `Passkey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credentialIDHash` to the `Passkey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credentialPublicKey` to the `Passkey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Passkey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Passkey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresAt` to the `WhitelistIP` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WhitelistIP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LoginAttempt" ADD COLUMN     "attemptType" TEXT NOT NULL,
ADD COLUMN     "origin" TEXT,
ADD COLUMN     "verificationId" TEXT,
ADD COLUMN     "webAuthnId" TEXT;

-- AlterTable
ALTER TABLE "LoginSession" ADD COLUMN     "sessionId" TEXT;

-- AlterTable
ALTER TABLE "Passkey" ADD COLUMN     "authenticatorId" TEXT NOT NULL,
ADD COLUMN     "counter" INTEGER NOT NULL,
ADD COLUMN     "credentialIDHash" TEXT NOT NULL,
ADD COLUMN     "credentialPublicKey" TEXT NOT NULL,
ADD COLUMN     "excludeCredentials" TEXT[],
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "transports" TEXT[],
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WhitelistIP" ADD COLUMN     "deviceId" TEXT,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sessionId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "VerificationAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastAttempt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cooldownEnd" TIMESTAMP(3),

    CONSTRAINT "VerificationAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Verification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Verification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Verification_code_key" ON "Verification"("code");

-- AddForeignKey
ALTER TABLE "VerificationAttempt" ADD CONSTRAINT "VerificationAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Verification" ADD CONSTRAINT "Verification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
