/*
  Warnings:

  - You are about to drop the column `createdAt` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tag" DROP CONSTRAINT "tag_creatorId_fkey";

-- AlterTable
ALTER TABLE "tag" DROP COLUMN "createdAt",
DROP COLUMN "creatorId",
DROP COLUMN "postId",
DROP COLUMN "updatedAt";
