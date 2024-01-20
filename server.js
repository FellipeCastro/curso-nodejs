import app from './src/app.js'
import conexao from './infra/conexao.js'

const PORT = 5500

// Conexão
conexao.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Conexão realizada com sucesso')

        // Escutar porta 5500
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
        })
    }
})
