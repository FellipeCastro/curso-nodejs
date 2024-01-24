import app from './app.js'

const PORT = process.env.PORT || 5500

// Escutar porta 5500
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
