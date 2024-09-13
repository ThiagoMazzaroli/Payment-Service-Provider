import express from "express"
import {createTransactions, listTransactions} from '../controllers/transactionsControllers.js'

const router = express.Router()

router.post('/criar', createTransactions)
router.get('/listar', listTransactions)

export default router
