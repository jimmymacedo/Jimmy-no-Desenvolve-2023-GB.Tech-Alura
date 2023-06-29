import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";
import { NegociacoesView } from "./views/negociacoes-view.js";
const controller = new NegociacaoController
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Form não loacalizado.');
}



