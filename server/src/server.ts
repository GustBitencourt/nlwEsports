import express from "express";
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient()

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })

    return response.json(games);
})

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
})

app.get('/games/:id/ads', (request, response) => {
    const gameId = request.params.id;

    return response.send(gameId)

    return response.json([
        {
            id: 1,
            name: 'Ads 1',
        },
        {
            id: 2,
            name: 'Ads 2',
        },
        {
            id: 3,
            name: 'Ads 3',
        },
    ])
})

app.get('/ads/:id/discord', (request, response) => {
    const adsId = request.params.id;
    
    return response.send(adsId);

    return response.json();
})

app.listen(3333);