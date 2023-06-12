const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaPessoasAtivas)

router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)

router.post('/pessoas', PessoaController.criaPessoa)

router.put('/pessoas/:id', PessoaController.atualizaPessoa)

router.delete('/pessoas/:id', PessoaController.apagaPessoa)

router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)

router.get('/pessoas/:estudanteId/matriculas', PessoaController.pegaTodasAsMatriculas)

router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula)

router.get('/pessoas/:estudanteId/matriculas/status/:status', PessoaController.pegaAsMatriculasPorStatus)

router.post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula)

router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula)

router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula)

router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)

module.exports = router