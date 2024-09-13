-- CreateEnum
CREATE TYPE "metodoPagamento" AS ENUM ('cartao_debito', 'cartao_credito');

-- CreateEnum
CREATE TYPE "payableStatus" AS ENUM ('vaiReceber', 'recebeu');

-- CreateTable
CREATE TABLE "transactions" (
    "valor" DECIMAL(10,2) NOT NULL,
    "descricao" TEXT NOT NULL,
    "metodoPagamento" "metodoPagamento" NOT NULL,
    "cartaoNumero" INTEGER NOT NULL,
    "nomePortador" TEXT NOT NULL,
    "validadeCartao" TIMESTAMP(3) NOT NULL,
    "codigoVerificaCartao" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "payables" (
    "id" INTEGER NOT NULL,
    "status" "payableStatus" NOT NULL,
    "dataPagamento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_cartaoNumero_key" ON "transactions"("cartaoNumero");

-- CreateIndex
CREATE UNIQUE INDEX "payables_id_key" ON "payables"("id");
