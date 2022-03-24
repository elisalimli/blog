/*
  Warnings:

  - You are about to drop the column `creatorId` on the `post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_creatorId_fkey";

-- AlterTable
ALTER TABLE "post" DROP COLUMN "creatorId";
