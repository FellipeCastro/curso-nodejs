import express from 'express'
import routes from './routes.js'
const app = express()

// Indicando para o Express ler o body com JSON
app.use(express.json())

// Usar o router
app.use(routes)

export default app
