import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não localizado.'))
}

async function pegaArquivo(caminhoArquivo) {
    try {
        const enconding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoArquivo, enconding)
        console.log(chalk.green(texto))
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

// function pegaArquivo(caminhoArquivo) {
//     const enconding = 'utf-8'
//     fs.promises
//         .readFile(caminhoArquivo, enconding)
//         .then((texto) => {console.log(chalk.green(texto))})
//         .catch(trataErro)
// }


pegaArquivo('./arquivos/texto.md')