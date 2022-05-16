import { html, LitElement } from "lit";
import { OneCharUseCase } from "../../usecases/one-char.usecase";
import { ApiInfo } from "../../usecases/api-info.usecase";
import { UtilsServices } from "../../services/utils.services";

import "./one-char.page.css";
import "../../ui/char/char.ui";
import "../../ui/banner/banner.ui";

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

        let firstChar = 1;
        const oneChar = new OneCharUseCase();
        this.char = await oneChar.execute(firstChar);
    }

    async randomChar() {
        const allAvailableChars = await ApiInfo.execute("character");

        const randomCharacter = UtilsServices.random(
            allAvailableChars.info.count
        );
        const oneChar = new OneCharUseCase();
        this.char = await oneChar.execute(randomCharacter);
    }

    render() {
        return html`
            <app-banner
                class="static-banner"
                .title="${"Random me!"}"
                .subtitle="${"I dare you to click it... BUT NOT ME! ...open your eyes Morty!"}"
            ></app-banner>
            <main class="one-character__container">
                <img
                    class="openEyes"
                    src="https://res.cloudinary.com/willykronara/image/upload/v1652541138/pngwing.com_1_xgnwtg.png"
                    alt="Picture of rick opening Morty's eyes"
                />
                <button
                    class="one-character__button"
                    @click="${this.randomChar}"
                >
                    <char-ui .char="${this.char}"></char-ui>
                </button>
            </main>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("card-person", CardPerson);
