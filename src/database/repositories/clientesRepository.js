//import * as db from '../index.js';

const clientes = [
  {
    idcliente: 100,
    nome_empresa: 'Empresa ABC',
    cnpj: '01.001.001/0001-01',
    nome_socio: 'Clement Rivers',
    cpf: '001.001.001-01',
    telefone: '(11) 99999-1234',
    email: 'cliente01@email.com',
    atividade_principal: '',
    faturamento_bruto: 40000,
    despesas_fixas: 4000,
    despesas_variaveis: 22000,
    tempo_ativo: 11,
    empreendeu_antes: 'sim',
    possui_emprestimo: 'sim',
    margem_lucro: 0.35,
    score: 400
  },
  {
    idcliente: 101,
    nome_empresa: 'Empresa DEF',
    cnpj: '01.001.001/0001-02',
    nome_socio: 'Glenn Roberson',
    cpf: '001.001.001-02',
    telefone: '(11) 99999-2345',
    email: 'cliente02@email.com',
    atividade_principal: '',
    faturamento_bruto: 60000,
    despesas_fixas: 13000,
    despesas_variaveis: 35000,
    tempo_ativo: 15,
    empreendeu_antes: 'nao',
    possui_emprestimo: 'sim',
    margem_lucro: 0.20,
    score: 400
  },
  {
    idcliente: 102,
    nome_empresa: 'Empresa GHI',
    cnpj: '01.001.001/0001-03',
    nome_socio: 'Fleur Pratt',
    cpf: '001.001.001-03',
    telefone: '(11) 99999-3456',
    email: 'cliente03@email.com',
    atividade_principal: '',
    faturamento_bruto: 60000,
    despesas_fixas: 14000,
    despesas_variaveis: 40000,
    tempo_ativo: 40,
    empreendeu_antes: 'nao',
    possui_emprestimo: 'nao',
    margem_lucro: 0.10,
    score: 450
  },
  {
    idcliente: 103,
    nome_empresa: 'Empresa JKL',
    cnpj: '01.001.001/0001-04',
    nome_socio: 'Simona Maxwell',
    cpf: '001.001.001-04',
    telefone: '(11) 99999-4567',
    email: 'cliente04@email.com',
    atividade_principal: '',
    faturamento_bruto: 90000,
    despesas_fixas: 22000,
    despesas_variaveis: 60000,
    tempo_ativo: 42,
    empreendeu_antes: 'nao',
    possui_emprestimo: 'nao',
    margem_lucro: 0.0889,
    score: 500
  },
];


class ClientesRepository {
    async findAll() {
      return clientes;
    }

    async findById(idcliente) {
        for(let cliente of clientes){
          if(cliente.idcliente === Number(idcliente)) {
            return cliente;
          }
        }
    }

    async create(clienteData) {
      clientes.push(clienteData);
    }
}

//importando dados de um banco de dados
// class ClientesRepository {
//     async findAll() {
//         const conn  = await db.connectToPostgre();
//         const query = 'SELECT * FROM clientes';
//         const clientes = await conn.query(query);
//         return clientes;
//     }

//     async findById(idcliente) {
//         const conn = await db.connectToPostgre();
//         const query = 'SELECT * FROM clientes WHERE idcliente = ?';
//         const cliente = await conn.query(query, [idcliente]);
//         return cliente;
//     }

// }

export default ClientesRepository;