/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `post` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "post_id_creatorId_key";

-- CreateIndex
CREATE UNIQUE INDEX "post_id_key" ON "post"("id");
