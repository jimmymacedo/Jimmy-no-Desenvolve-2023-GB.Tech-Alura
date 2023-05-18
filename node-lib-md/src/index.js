import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não localizado.'))
}

async function pegaArquivo(caminhoArquivo) {
    try {
        const enconding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoArquivo, enconding)
        console.log(extraiLinks(texto))
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

pegaArquivo('./arquivos/texto.md')

export default pegaArquivo;
