import express from "express"
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Conexão com banco feita com sucesso")
})

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})

app.get('/livros', (req, res) => {
    
    livros.find((err, livros) => {
        res.status(200).json(livros)
    })
    
})

app.get('/livros/:id', (req, res) => {
    const i = buscaLivro(req.params.id)
    res.status(201).json(livros[i])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('livro cadastrado com sucesso.')
})

app.put('/livros/:id', (req, res) => {
    let i = buscaLivro(req.params.id)
    livros[i].titulo = req.body.titulo
    res.status(201).json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let i = buscaLivro(id)
    livros.splice(i, 1)
    res.status(201).send(`Livro ${id} excluído.`)
})

function buscaLivro(id) {
    return livros.findIndex( livro => livro.id == id)
}

export default app
