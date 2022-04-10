/*
  Warnings:

  - You are about to drop the `posts_categorys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts_categorys" DROP CONSTRAINT "posts_categorys_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "posts_categorys" DROP CONSTRAINT "posts_categorys_postId_fkey";

-- DropTable
DROP TABLE "posts_categorys";

-- CreateTable
CREATE TABLE "posts_categories" (
    "id" TEXT NOT NULL,
    "postId" TEXT,
    "categoryId" TEXT,

    CONSTRAINT "posts_categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts_categories" ADD CONSTRAINT "posts_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_categories" ADD CONSTRAINT "posts_categories_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
