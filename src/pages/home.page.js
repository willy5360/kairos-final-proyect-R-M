import { css, html, LitElement } from "lit"
import "../components/contact-form"
export class Home extends LitElement {

    static get styles(){
        return css`
        contact-form{
                height: 100vh;
            }
        `
    }

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