// const database = require('../models')
// const Sequelize = require('sequelize')

const {PessoasServices} = require('../services')
const pessoasServices = new PessoasServices()

class PessoaController {
    static async pegaPessoasAtivas (req, res) {
        try {
            const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos()
            return res.status(200).json(pessoasAtivas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodasAsPessoas (req, res) {
        try {
            const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros()
            return res.status(200).json(todasAsPessoas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const pessoa = await pessoasServices.pegaUmRegistro(id)
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)   
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await pessoasServices.atualizaRegistro(novasInfos, id)
            const pessoaAtualizada = await pessoasServices.pegaUmRegistro(id) 
            return res.status(200).json(pessoaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)   
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params
        try {
            await pessoasServices.apagaRegistro(id)
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)   
        }

    }

    static async restauraPessoa(req, res) {
        const { id } = req.params
        try {
            await pessoasServices.restauraRegistro(id)
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)  
        }

    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params

        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: { 
                    id:Number(matriculaId),
                    estudante_id:Number(estudanteId)
                }
            }) 
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    static async pegaTodasAsMatriculas(req, res) {
        const { estudanteId } = req.params

        try {
            const todasAsMatriculas = await database.Matriculas.findAll({
                where: { 
                    estudante_id:Number(estudanteId)
                }
            }) 
            return res.status(200).json(todasAsMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    static async pegaAsMatriculasPorStatus(req, res) {
        const { estudanteId, status } = req.params
        try {
            const todasAsMatriculas = await database.Matriculas.findAll({
                where: { 
                    estudante_id:Number(estudanteId),
                    status:status
                }
            }) 
            return res.status(200).json(todasAsMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id:Number(estudanteId) }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)   
        }
    }


    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try {
            await database.Matriculas.update(
                novasInfos, 
                {
                    where: { 
                        id:Number(matriculaId),
                        estudante_id:Number(estudanteId)
                    }
                }
            )
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: { 
                    id:Number(matriculaId)
                }
            }) 
            return res.status(200).json(matriculaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)   
        }
    }

    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({ 
                where: { 
                    id:Number(matriculaId), 
                    estudante_id:Number(estudanteId) 
                }
            })
            return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)   
        }

    }

    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          await database.Matriculas.restore({
            where: {
              id: Number(matriculaId),
              estudante_id: Number(estudanteId)
            }
          })
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }


    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const pessoa = await database.Pessoas.findOne({where: {id: Number(estudanteId)}})
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)   
        }

    }

    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params
        try {
            const todasAsMatriculas = await database.Matriculas.findAndCountAll({
                where: {
                    turma_id: Number(turmaId),
                    status: 'confirmado'
                },
                limit: 1,
                order: [['estudante_id', 'ASC']]
            })
            return res.status(200).json(todasAsMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)   
        }

    }

    static async pegaTurmasLotadas(req, res) {
        const { turmaId } = req.params
        const lotacaoTurma = 2
        try {
            const turmasLotadas = await database.Matriculas.findAndCountAll({
                where: {
                    status: 'confirmado'
                },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
            })
            return res.status(200).json(turmasLotadas.count)
        } catch (error) {
            return res.status(500).json(error.message)   
        }

    }

    static async cancelaPessoa(req, res) {
        const { estudanteId } = req.params
        try {
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
            return res.status(200).json({message: `matriculas referente ao estudante ${estudanteId} calceladas` })
        } catch (error) {
            return res.status(500).json(error.message)   
        }
    }
}

module.exports = PessoaController