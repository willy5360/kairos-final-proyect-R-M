import { html, LitElement } from "lit";
import { AllCharUseCase } from "../../usecases/all-chars.usecase";
import { ApiInfo } from "../../usecases/api-info.usecase";
import { NextCharacters } from "../../usecases/next-chars.usecase";
import { PreviousCharacters } from "../../usecases/prev-chars.usecase";
import { FilteredCharacters } from "../../usecases/filtered-chars.usecase";

import "../../ui/all-chars/all-char.ui";
import "./all-chars.css";
import"../../ui/banner/banner.ui"
export class CardPeople extends LitElement {
    static get properties() {
        return {
            chars: {
                type: Array,
                state: true,
            },
        };
    }

    async connectedCallback() {
        super.connectedCallback();

        this.page = 1;

        const allChars = new AllCharUseCase();
        this.chars = await allChars.execute();

        const max = await ApiInfo.execute("character");
        this.maxPages = max.info.pages;
    }

    async nextChar() {
        ++this.page;
        const nextChars = new NextCharacters();
        this.chars = await nextChars.execute(this.page);
    }

    async prevChar() {
        --this.page;
        const prevChars = new PreviousCharacters();
        const allChars = new AllCharUseCase();
        this.chars =
            this.page == 1
                ? await allChars.execute()
                : await prevChars.execute(this.page);
    }

    async requestData(event) {
        event.preventDefault();
        let name = this.querySelector("#character-name");
        let status = this.querySelector("#status");

        const filteredChars = new FilteredCharacters();
        const allChars = new AllCharUseCase();

        this.chars = (await filteredChars.execute(name.value))
            ? await filteredChars.execute(name.value, status.value)
            : await allChars.execute();
        name.value = "";
        status.value = "";
    }

    toTop(){
        window.scrollTo({top: 0, left:0 , behavior: "smooth"})
    }

    render() {
        return html`
            <app-banner class="static-banner" .title="${"Find me!"}" .subtitle="${"I bet you can't..."}"></app-banner>
            <all-chars .chars="${this.chars}">
                <form class="card-people__form" @submit="${this.requestData}">
                    <main class="form-filter__container">
                        <label htmlFor="name">Name:</label>
                        <input name="name" id="character-name" placeholder="Name"/>
                        <label htmlFor="status">Status:</label>
                        <select name="status" id="status">
                            <option value="">None</option>
                            <option value="alive">Alive</option>
                            <option value="unknown">Unknown</option>
                            <option value="dead">Dead</option>
                        </select>
                        <input  class="all-chars__button" type="submit" name="send" value="Find" />
                    </main>
                </form>
                <footer class="card-people__buttons">
                    <button class="all-chars__button" 
                        @click="${this.prevChar}"
                        ?disabled="${this.page == 1 ? true : false}"
                    >
                    <span class="fa-solid fa-lg fa-circle-chevron-left"></span>
                        PREV
                    </button>
                    <button @click="${this.toTop}" class="all-chars__button circle">
                        <span class="fa-solid fa-lg fa-circle-up"></span>
                    </button>
                    <button class="all-chars__button" 
                    @click="${this.nextChar}"
                    ?disabled="${this.page == this.maxPages - 1 ? true : false}"
                    >
                    NEXT
                    <span class="fa-solid fa-lg fa-circle-chevron-right"></span>
                    </button>
                </footer>
            </all-chars>
            
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("card-people", CardPeople);
