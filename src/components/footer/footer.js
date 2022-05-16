import { html, LitElement } from "lit";

import "./footer.css"

export class Footer extends LitElement{

    connectedCallback(){
        super.connectedCallback()
        
    }

    render(){
        return html`
            <footer class="footer__container">
                <h1 class="footer__text">Williams Frank Padilla Flores</h1>
            </footer>
        `
    }

    createRenderRoot(){
        return this;
    }

}

customElements.define("main-footer", Footer)