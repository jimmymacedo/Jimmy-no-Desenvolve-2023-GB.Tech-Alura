import express from "express"
import AutorController from "../controllers/autorController.js"

const router = express.Router();

router
    .get    ('/autores',     AutorController.listarAutores)
    .post   ('/autores',     AutorController.cadastrarAutor)

    .get    ('/autores/:id', AutorController.listarAutorPorId)
    .put    ('/autores/:id', AutorController.atualizarAutor)
    .delete ('/autores/:id', AutorController.excluirAutor)

export default router