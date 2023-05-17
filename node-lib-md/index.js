import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não localizado.'))
}

function pegaArquivo(caminhoArquivo) {
    const enconding = 'utf-8'
    fs.readFile(caminhoArquivo, enconding, (erro, texto) => {
        if (erro) {
            trataErro(erro)
        }
        console.log(chalk.green(texto))
    })
    
}

pegaArquivo('./arquivos/texto.md')