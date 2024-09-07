import { fastify } from 'fastify'
import { databasePostgres } from './database-postgres.js'

// Criando servidor
const server = fastify()

const database = new databasePostgres()

//Criando uma rota
server.post('/videos', async (req, reply) =>{
    const { title, description, duration } = req.body

    await database.create({
        title,
        description,
        duration,
    })
    return reply.status(201).send()
})

//Criando uma segunda rota /node
server.get('/videos', async (req, reply)=>{
    const search = req.query.search

    const videos = await database.list(search)

    return videos
})

server.put('/videos/:id', async (req, reply)=>{
    const { title, description, duration } = req.body

    const videoId = req.params.id

    await database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()

})

server.delete('/videos/:id', (req, reply)=>{
    const videoId = req.params.id
    database.delete(videoId)

    return reply.status(204).send()
})

// Abrindo o servidor
server.listen({
    port: process.env.PORT ?? 3333,
})