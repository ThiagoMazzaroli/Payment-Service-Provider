import express from 'express'
import 'dotenv/config'
import userRoutes from './routes/routes.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express();

app.use(express.json())

app.listen(process.env.PORT, ( ) => {
    console.log('aoba')
})

app.use('/transacoes', userRoutes)