const express = require('express')
const app = express()
const port = 5500

// Rota padrão/raiz

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Escutar porta 5500

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
