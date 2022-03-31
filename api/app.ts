import express from 'express'
// import { Request } from 'express'
// import { body, ValidationError, validationResult } from 'express-validator'
// import db, { Ticket } from '../prisma'
const app = express()

app.use('/api', express.json({ limit: '5kb' }))

app.get('/api/test', (req, res) => {
    res.send('Hello')
})

app.listen(4000)