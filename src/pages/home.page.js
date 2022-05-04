export class Home extends HTMLElement {

    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML = "esto es el home"
    }
}

customElements.define("home-page", Home)