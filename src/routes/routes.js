import express from "express"
import {createTransactions, listTransactions, deleteTransactions} from '../controllers/transactionsControllers.js'

const router = express.Router()

router.post('/criar', createTransactions)
router.get('/listar', listTransactions)
router.delete('/deletar/:id', deleteTransactions)

export default router
