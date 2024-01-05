-- AlterTable
CREATE SEQUENCE news_id_seq;
ALTER TABLE "news" ALTER COLUMN "id" SET DEFAULT nextval('news_id_seq');
ALTER SEQUENCE news_id_seq OWNED BY "news"."id";

-- AlterTable
CREATE SEQUENCE news_category_id_seq;
ALTER TABLE "news_category" ALTER COLUMN "id" SET DEFAULT nextval('news_category_id_seq');
ALTER SEQUENCE news_category_id_seq OWNED BY "news_category"."id";
