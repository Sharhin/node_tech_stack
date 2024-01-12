-- AlterTable
ALTER TABLE "news" ADD COLUMN     "date_add" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "news_category_id" INTEGER;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_news_category_id_fkey" FOREIGN KEY ("news_category_id") REFERENCES "news_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
