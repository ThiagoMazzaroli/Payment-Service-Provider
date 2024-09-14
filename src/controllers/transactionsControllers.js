import express from 'express'

import { metodoPagamento, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createTransactions = async (req, res) =>{
    
        const createdTransactions = await prisma.transactions.create({
          data: {
            valor: req.body.valor,              
            descricao: req.body.descricao,            
            metodoPagamento: req.body.metodoPagamento,    
            cartaoNumero: req.body.cartaoNumero,         
            nomePortador: req.body.nomePortador,         
            validadeCartao: req.body.validadeCartao,       
            codigoVerificaCartao: req.body.codigoVerificaCartao
          },
        })

        const pagamentoDebito = metodoPagamento.cartao_debito
          
        const createdPayables = await prisma.payables.create({
          data: {
            status: metodoPagamento === pagamentoDebito ? "recebeu" : "vaiReceber",   
          },
        })
        res.status(201).json({message: "transação criada, informações:", createdTransactions, createdPayables})
}

 export const listTransactions = async (req, res) => {
      const listAllTransactions = await prisma.transactions.findMany()
      res.status(200).json(listAllTransactions)
}

export const deleteTransactions = async (req, res) => {
  const {id} = req.params
  const deleteTansaction = await prisma.transactions.delete({
    where: {
      id: Number(id)
    },
    
  })
  res.status(200).json({message: "Usuario deletado!"})
}
