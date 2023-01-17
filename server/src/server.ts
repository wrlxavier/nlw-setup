import Fastfy from 'fastify'
import { PrismaClient } from '@prisma/client'


const app = Fastfy()
const prisma = new PrismaClient()

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