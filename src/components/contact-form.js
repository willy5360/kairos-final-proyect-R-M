import { css, html, LitElement } from "lit";

export class ContactForm extends LitElement {

    static get styles(){
        return css`
            form{
                display: flex;
                flex-direction: column;
                width: 60%;
                justify-content:center;
                align-items: center;
                height: 50vh;
                margin: 5rem auto;
            }
        `
    }

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
}

customElements.define("contact-form", ContactForm)