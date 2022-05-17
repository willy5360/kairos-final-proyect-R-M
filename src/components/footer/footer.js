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
                <form
                class="contact-form__container"
                action="mailto:willy5360@hotmail.com"
                method="post"
                enctype="text/plain"
            >
                <label htmlFor="your-name">Your name:</label>
                <input class="form-input"  type="text" name="your-name" />
                <label htmlFor="email">email</label>
                <input  class="form-input" type="text" name="email" />
                <label htmlFor="comments"> comments: </label>
                <textarea rows="10" cols="50" name="comments"></textarea>
                <input class="form-send__button" type="submit" name="submit" value="Send" />
            </form>
            </footer>
        `
    }

    createRenderRoot(){
        return this;
    }

}

customElements.define("main-footer", Footer)