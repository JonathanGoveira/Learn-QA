import { Router, request, response } from "express";
import { userController } from "./controllers/usersController.js";

const routes = Router()

routes.get('/users', userController.listarUsuarios)
routes.post('/users', userController.criarUsuario)

// STATUS CODE
//200 - OK
//201 - CREATE DATA
//404 - PAGE NOT FOUND

//GET - LER OS DADOS
//POST - CRIAR OS DADOS
//PUT/PATCH - EDITAR OS DADOS
//DELETE - DELETAR OS DADOS
export { routes }