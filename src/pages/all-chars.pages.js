import {html, LitElement } from "lit";
import { AllCharUseCase } from "../usecases/all-chars.usecase";
import { ApiCharacterInfo } from "../usecases/api-info.usecase";
import { NextCharacters } from "../usecases/next-chars.usecase";
import { PreviousCharacters } from "../usecases/prev-chars.usecase";
import "../ui/all-char.ui"


export class CardPeople extends LitElement {

    static get properties() {
        return {
            chars: {
                type: Array,
                state: true
            },
        }
    }
    

    async connectedCallback(){
        super.connectedCallback()

        this.page = 1

        const allChars = new AllCharUseCase()
        this.chars = await allChars.execute()

        const info = new ApiCharacterInfo()
        const max = await info.execute("character")
        this.maxPages = max.pages
    }
    
    async nextChar(){ 
        ++this.page
        const nextChars = new NextCharacters()
        this.chars = await nextChars.execute(this.page)
    }

    async prevChar(){
        --this.page
        const prevChars = new PreviousCharacters()
        const allChars = new AllCharUseCase()
        this.chars = this.page == 1 ? await allChars.execute() : await prevChars.execute(this.page)
    }

    render() {
        return html`
            <all-chars .chars="${this.chars}"></all-chars>
            <button @click="${this.prevChar}" ?disabled="${this.page == 1 ? true : false}">PREV</button>
            <button @click="${this.nextChar}" ?disabled="${this.page == (this.maxPages - 1) ? true : false}">NEXT</button>
        `
    }

    createRenderRoot(){
        return this;
    }
}

customElements.define("card-people", CardPeople)