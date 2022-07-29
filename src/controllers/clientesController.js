import ClientesService from '../services/clientesService.js';


export async function get(req, res, next) {
    const payload = await new ClientesService().getAllClientes();
    res.status(200).send(payload);
};

export async function getById(req, res, next) {
    const payload = await new ClientesService().getClienteById(req.params.id);
    res.status(200).send(payload);
};




