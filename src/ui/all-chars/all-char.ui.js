import { html, LitElement } from "lit";
import "./all-char.ui.css";

export class AllCharsUI extends LitElement {
    static get properties() {
        return {
            chars: {
                type: Array,
            },
        };
    }

    render() {
        return html` <article class="cards">
            ${this.chars &&
            this.chars.map(
                (char) => html`
                    <main id="card_${char.id}" class="card-container">
                        <img class="card-img" src="${char.image}" />
                        <div class="card-info">
                            <h1 class="font-large">${char.name}</h1>
                            <p>
                                <span> Status: </span>
                                ${char.status == "Alive"
                                    ? "Alive 🟢"
                                    : char.status == "Dead"
                                    ? "Dead ⚫️"
                                    : "Unknown 🟡"}
                            </p>
                            <p><span> Species: </span>${char.species}</p>
                            <p>
                                <span> Type: </span> ${char.type
                                    ? char.type
                                    : "Unknown"}
                            </p>
                            <p>
                                <span> Gender: </span>${char.gender
                                    ? char.gender
                                    : "Not identified"}
                            </p>
                        </div>
                    </main>
                `
            )}
        </article>`;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("all-chars", AllCharsUI);
