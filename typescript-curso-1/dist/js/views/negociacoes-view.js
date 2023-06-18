export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(models) {
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
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        }).join('')}
              </tbody>
        </table>
        `;
    }
    update(models) {
        const template = this.template(models);
        console.log(template);
        this.elemento.innerHTML = this.template(models);
    }
}
