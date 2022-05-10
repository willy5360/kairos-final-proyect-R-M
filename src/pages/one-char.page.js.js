import {css, html, LitElement } from "lit";
import { OneCharUseCase } from "../usecases/one-char.usecase";
import { ApiCharacterInfo } from "../usecases/api-info.usecase";
import "../ui/char.ui"
import { UtilsServices } from "../services/utils.services";

export class CardPerson extends LitElement {
    static get properties() {
        return {
            char: {
                type: Object,
                state: true,
            },
        };
    }

    static get styles(){
        return css`
            :host{
                width:100%;
                height:100vh;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        let firstChar = 1
        const oneChar = new OneCharUseCase();
        this.char = await oneChar.execute(firstChar)
    }

    async randomChar(){

        const info = new ApiCharacterInfo()
        const allAvailableChars = await info.execute("character")

        const randomCharacter = UtilsServices.random(allAvailableChars.count)
        const oneChar = new OneCharUseCase();
        this.char = await oneChar.execute(randomCharacter)
    }

    render(){
        return html`
            <char-ui .char="${this.char}"></char-ui>
            <button @click="${this.randomChar}">randomME</button>
        `
    }
}

customElements.define("card-person", CardPerson);
