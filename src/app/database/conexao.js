import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'bdcopa'
})

conexao.connect()

/**
 * Executa um códio SQL com ou sem valores
 * @param {string} sql instrução SQL a ser executada 
 * @param {string | [selecao, id]} valores valores a serem passados para o SQL
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns  objeto das Promisse
 */

export const consult = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if (error) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao
