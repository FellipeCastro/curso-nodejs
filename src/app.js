import express from 'express'
import conexao from '../infra/conexao.js'
const app = express()

// Indicando para o Express ler o body com JSON
app.use(express.json())

// Returnar o objeto por Id
const buscarSelecaoPorId = (id) => {
    return selecoes.filter(selecao => selecao.id == id)
}

// Pegar a posição do elemento no array por id
const buscarIndexSelecao = (id) => {
    return selecoes.findIndex(selecao => selecao.id == id)
}
// Rotas
app.get('/selecoes', (req, res) => {
    // res.status(200).send(selecoes)
    const sql = 'SELECT * FROM selecoes;'
    conexao.query(sql, (error, result) => {
        if (error) {
            res.status(404).json({"erro": error})
        } else {
            res.status(200).json(result)
        }
    })
})

app.get('/selecoes/:id', (req, res) => {
    // res.json(buscarSelecaoPorId(req.params.id))
    const id = req.params.id
    const sql = 'SELECT * FROM selecoes WHERE id=?;'
    conexao.query(sql, id, (error, result) => {
        const linha = result[0]
        if (error) {
            res.status(404).json({"erro": error})
        } else {
            res.status(200).json(linha)
        }
    })
})

app.post('/selecoes', (req, res) => {
    // selecoes.push(req.body)
    // res.status(201).send('Seleção cadastrada com sucesso')
    const selecao = req.body
    const sql = 'INSERT INTO selecoes SET ?;'
    conexao.query(sql, selecao, (error, result) => {
        if (error) {
            res.status(400).json({"erro": error})
        } else {
            res.status(201).json(result)
        }
    })
})

app.delete('/selecoes/:id', (req, res) => {
    // let index = buscarIndexSelecao(req.params.id)
    // selecoes.splice(index, 1)
    // res.send(`Seleção com id: ${req.params.id} excluida com sucesso!`)
    const id = req.params.id
    const sql = 'DELETE FROM selecoes WHERE id=?;'
    conexao.query(sql, id, (error, result) => {
        if (error) {
            res.status(404).json({"erro": error})
        } else {
            res.status(200).json(result)
        }
    })
})

app.put('/selecoes/:id', (req, res) => {
    // let index = buscarIndexSelecao(req.params.id)
    // selecoes[index].selecao = req.body.selecao
    // selecoes[index].grupo = req.body.grupo
    // res.json(selecoes)
    const id = req.params.id
    const selecao = req.body
    const sql = 'UPDATE selecoes SET ? WHERE id=?;'
    conexao.query(sql, [selecao, id], (error, result) => {
        if (error) {
            res.status(400).json({"erro": error})
        } else {
            res.status(200).json(result)
        }
    })
})

export default app
