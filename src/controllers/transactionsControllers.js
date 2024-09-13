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
        const createdPayables = await prisma.payables.create({
          data: {
          },
        })
        res.status(201).json({message: "transação criada, informações:", createdTransactions})
}

 export const listTransactions = async (req, res) => {
      const listAllTransactions = await prisma.transactions.findMany()
      res.status(200).json(listAllTransactions)
}