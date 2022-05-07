import { html, LitElement } from "lit"
import "../components/contact-form"
export class Home extends LitElement {

    connectedCallback(){
        super.connectedCallback()
    }

    render(){
        return html`
            <contact-form></contact-form>
        `
    }
}

customElements.define("home-page", Home)