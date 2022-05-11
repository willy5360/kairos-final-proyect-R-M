import { html, LitElement } from "lit";
import "./char.ui.css"

export class OneCharUI extends LitElement {
    static get properties() {
        return {
            char: {
                type: Object,
            },
        };
    }

    render() {
        return (
            this.char &&
            html`
                <article class="card__oneChar-container">
                    <figure>
                        <img class="card__oneChar-img" src="${this.char.image}" />
                    </figure>
                    <main class="card__oneChar-info">
                        <h1>${this.char.name}</h1>
                        <p>
                            Status:
                            ${this.char.status == "Alive"
                                ? "Alive 🟢"
                                : this.char.status == "Dead"
                                ? "Dead ⚫️"
                                : "Unknown 🟡"}
                        </p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </main>
                </article>
            `
        );
    }

    createRenderRoot(){
        return this;
    }
}

customElements.define("char-ui", OneCharUI);
