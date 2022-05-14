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
                        <img class="card__oneChar-img" src="${this.char.image}" />
                    <main class="card__oneChar-info">
                        <h1>${this.char.name}</h1>
                        <p>Species: ${this.char.species}</p>
                        <p>type: ${this.char.type}</p>
                        <p>Origin: ${this.char.origin.name}</p>
                        <p class="card__status ${this.char.status}">
                            Status:
                            ${this.char.status.toUpperCase()}
                        </p>
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
