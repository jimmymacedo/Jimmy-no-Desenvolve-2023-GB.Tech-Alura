export class View {
    constructor(selector, escapar = false) {
        this.escapar = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`${selector} não existe`);
        }
        this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<string>[\s\S]*?<\/string>/, '');
        }
        this.element.innerHTML = template;
    }
}
