import {html, LitElement } from "lit";
import { AllCharUseCase } from "../usecases/all-chars.usecase";
import "../ui/all-char.ui"

export class CardPeople extends LitElement {

    static get properties() {
        return {
            chars: {
                type: Array,
                state: true
            }
        }
    }

    async connectedCallback(){
        super.connectedCallback()
        const allChars = new AllCharUseCase()
        this.chars = await allChars.execute()
    }

    render() {
        return html`
            <all-chars .chars="${this.chars}"></all-chars>
        `
    }
}

customElements.define("card-people", CardPeople)