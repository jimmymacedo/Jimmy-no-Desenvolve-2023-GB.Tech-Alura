export abstract class View<T> {

    protected element: HTMLElement;
    private escapar = false;
    
    constructor(selector: string, escapar: boolean = false) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`${selector} não existe`);
        }
        this.escapar = escapar;
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<string>[\s\S]*?<\/string>/, '')
        }
        this.element.innerHTML = template;
    } 

}