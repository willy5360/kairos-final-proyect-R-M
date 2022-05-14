import { html, LitElement } from "lit";
import "./main-characters.css";

export class MainCharacters extends LitElement {
    static get properties() {
        return {
            mainCharacters: {
                type: Array,
            },
        };
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`
            <article class="main-characters__container">
                ${this.mainCharacters &&
                this.mainCharacters.map(
                    (character) => html`
                        <section
                            class="character__container ${character.id %
                                2 ==
                            0
                                ? "right"
                                : "left"}"
                            id="main_character_${character.id}"
                        >
                            <img class="character__img" src="${character.img}" alt="picture of ${character.name}" />
                            <main class="character__info">
                                <h1 class="font-large">${character.name}</h1>
                                <p class="font-medium">${character.description}</p>
                            </main>
                        </section>
                    `
                )}
            </article>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("main-characters", MainCharacters);
