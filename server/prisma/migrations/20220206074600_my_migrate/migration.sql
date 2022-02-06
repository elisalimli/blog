/*
  Warnings:

  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id,creatorId]` on the table `post` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "post" DROP CONSTRAINT "post_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "post_id_creatorId_key" ON "post"("id", "creatorId");
