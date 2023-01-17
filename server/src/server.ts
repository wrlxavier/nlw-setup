import Fastfy from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'


const app = Fastfy()
const prisma = new PrismaClient()

app.register(cors)

//Exemplo de especificação de cors (quais endereços podem acessar a API)
//Em produção, usa-se este tipo de configuração
/* app.register(cors, {
    origin: ['http://localhost:3000']
}) */

app.get('/', async () => {

    const habits = await prisma.habit.findMany({
/*         where: {
            tittle: {
                startsWith : 'Beber'
            }
        } */
    })

    return habits
})

app.listen({
    port: 3333,
}) .then(()=>{
    console.log('HTTP Server running!') 
})