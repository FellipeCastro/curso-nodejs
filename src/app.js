import express from 'express'
import routes from './routes.js'
const app = express()

// Usar o router
app.use(routes)

// Indicando para o Express ler o body com JSON
app.use(express.json())

export default app
