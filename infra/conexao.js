import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Fsc#1531',
    database: 'bdcopa'
})

export default conexao
