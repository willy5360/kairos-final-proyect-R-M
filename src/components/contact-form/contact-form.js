import { css, html, LitElement } from "lit";
import "./contact-form.css"

export class ContactForm extends LitElement {


    render(){
        return html`
            <form action="mailto:willy5360@hotmail.com" method="post" enctype="text/plain">
                Your name: <input type="text" name="your name">
                email <input type="text" name="email">
                comments: 
                <textarea></textarea>
                <input type="submit" name="submit" value="submit" />

            </form>
        `
    }

    createRenderRoot(){
        return this;
    }
}

customElements.define("contact-form", ContactForm)