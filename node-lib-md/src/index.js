import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'não há links no arquivo.'
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não localizado.'))
}

async function pegaArquivo(caminhoArquivo) {
    try {
        const enconding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoArquivo, enconding)
        return extraiLinks(texto)
    } catch (erro) {
        trataErro(erro)
    } finally {
    }
}

pegaArquivo('./arquivos/texto.md')

export default pegaArquivo;
