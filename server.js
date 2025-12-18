import express from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

const port = 3000

app.post('/usuarios', async (req, res) =>{

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.put('/usuarios/:id', async (req, res) =>{
    
    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) =>{
    
    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })

    res.sendStatus(204)
})

app.get('/usuarios', async (req, res) => {
  const { name, email } = req.query

  const orFilters = []

  if (name) {
    orFilters.push({ name })
  }

  if (email) {
    orFilters.push({ email })
  }

  const users = await prisma.user.findMany({
    where: orFilters.length > 0 ? { OR: orFilters } : {}
  })

  res.status(200).json(users)
})


app.listen(port, () => {
    console.log(`Teste da porta ${port}`)
})