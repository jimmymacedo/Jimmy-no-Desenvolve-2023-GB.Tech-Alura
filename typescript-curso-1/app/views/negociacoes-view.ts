import { View } from './view.js'
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView extends View<Negociacoes>  {

    protected template(models: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
              <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr
              </thead>
              <tbody>
                ${models.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `
                }).join('')}
              </tbody>
        </table>
        `;
    }

    private formatar(data:Date) {
        return new Intl.DateTimeFormat().format(data)
    }

}