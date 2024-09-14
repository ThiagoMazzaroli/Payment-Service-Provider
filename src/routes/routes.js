import express from "express"
import {createTransactions, listTransactions, deleteTransactions, listPayables, saldoPayables} from '../controllers/transactionsControllers.js'

const router = express.Router()

router.post('/criar', createTransactions)
router.get('/listarTransactions', listTransactions)
router.get('/listarPayables', listPayables)
router.get('/saldo', saldoPayables)
router.delete('/deletar/:id', deleteTransactions)

export default router
