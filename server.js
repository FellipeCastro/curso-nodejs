import app from "./src/app.js"
const PORT = 5500

// Escutar porta 5500
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
