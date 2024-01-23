import { consult } from '../database/conexao.js'

class SelecaoRepository {

    // CRUD
    findAll() {
        const sql = 'SELECT * FROM selecoes;'
        return consult(sql, 'Não foi possível localizar seleções')
    }

    findById(id) {
        const sql = 'SELECT * FROM selecoes WHERE id=?;'
        return consult(sql, id, 'Não foi possível cadastrar localizar seleção')
    }

    create(selecao) {
        const sql = 'INSERT INTO selecoes SET ?;'
        return consult(sql, selecao, 'Não foi possível cadastrar seleção')
    }

    update(selecao, id) {
        const sql = 'UPDATE selecoes SET ? WHERE id=?;'
        return consult(sql, [selecao, id], 'Não foi possível atualizar seleção')
    }

    delete(id) {
        const sql = 'DELETE FROM selecoes WHERE id=?;'
        return consult(sql, id, 'Não foi possível apagar seleção')
    }

}

export default new SelecaoRepository()
