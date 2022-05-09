export class AppElement extends HTMLElement {

    constructor(){
        super();
        console.log("inicializado")
    }

    connectedCallback() {
        this.hello = "Buenas a todos"
        this.innerHTML = `<p> ${this.hello} </p>`
    }
}

customElements.define("app-element", AppElement);