export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(negoiacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negoiacoes.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map