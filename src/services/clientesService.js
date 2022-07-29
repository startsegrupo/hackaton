import ClientesRepository from '../database/repositories/clientesRepository.js';

class ClientesService {
    constructor() {
        this.repository = new ClientesRepository();
    }

    async getAllClientes() {
        return this.repository.findAll();
    }

    async getClienteById(idcliente) {
        return this.repository.findById(idcliente);
    }

};

export default ClientesService;