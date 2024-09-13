-- DropIndex
DROP INDEX "payables_id_key";

-- AlterTable
CREATE SEQUENCE payables_id_seq;
ALTER TABLE "payables" ALTER COLUMN "id" SET DEFAULT nextval('payables_id_seq'),
ADD CONSTRAINT "payables_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE payables_id_seq OWNED BY "payables"."id";

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "transactions_pkey" PRIMARY KEY ("id");
