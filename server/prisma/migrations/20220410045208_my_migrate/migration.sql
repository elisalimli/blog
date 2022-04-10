/*
  Warnings:

  - You are about to drop the `category_tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post_category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "category_tag" DROP CONSTRAINT "category_tag_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "category_tag" DROP CONSTRAINT "category_tag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "post_category" DROP CONSTRAINT "post_category_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "post_category" DROP CONSTRAINT "post_category_postId_fkey";

-- DropTable
DROP TABLE "category_tag";

-- DropTable
DROP TABLE "post_category";

-- CreateTable
CREATE TABLE "posts_categorys" (
    "id" TEXT NOT NULL,
    "postId" TEXT,
    "categoryId" TEXT,

    CONSTRAINT "posts_categorys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories_tags" (
    "id" TEXT NOT NULL,
    "tagId" TEXT,
    "categoryId" TEXT,

    CONSTRAINT "categories_tags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts_categorys" ADD CONSTRAINT "posts_categorys_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_categorys" ADD CONSTRAINT "posts_categorys_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_tags" ADD CONSTRAINT "categories_tags_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_tags" ADD CONSTRAINT "categories_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
