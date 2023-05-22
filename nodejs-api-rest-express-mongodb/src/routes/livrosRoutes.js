import express from "express"
import LivroController from "../controllers/livroController.js"

const router = express.Router();

router
    .get    ('/livros',     LivroController.listarLivros)
    .post   ('/livros',     LivroController.cadastrarLivro)

    .get    ('/livros/:id', LivroController.listarLivroPorId)
    .put    ('/livros/:id', LivroController.atualizarLivro)
    .delete ('/livros/:id', LivroController.excluirLivro)

export default router