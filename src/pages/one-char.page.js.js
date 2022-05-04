import { html, LitElement } from "lit";
import { OneCharUseCase } from "../usecases/one-char.usecase";
import "../ui/char.ui"

export class CardPerson extends LitElement {
    static get properties() {
        return {
            char: {
                type: Object,
                state: true,
            },
        };
    }

    async connectedCallback() {
        super.connectedCallback();

        let firstChar = 1
        const oneChar = new OneCharUseCase();
        this.char = await oneChar.execute(firstChar)
    }

    async randomChar(){

        let randomCharacter = Math.floor(Math.random()*826);
        const oneChar = new OneCharUseCase();
        this.char = await oneChar.execute(randomCharacter)
    }

    render(){
        return html`
            <button @click="${this.randomChar}">randomME</button>
            <char-ui .char="${this.char}"></char-ui>
        `
    }
}

customElements.define("card-person", CardPerson);
