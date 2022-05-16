import { html, LitElement } from "lit";
import "./char.ui.css";

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
                        <p><span>Species:</span> ${this.char.species}</p>
                        <p>
                            <span>Type:</span> ${this.char.type == ""
                                ? "unknown"
                                : this.char.type}
                        </p>
                        <p><span>Origin:</span> ${this.char.origin.name}</p>
                        <p><span>Location:</span> ${this.char.location.name}</p>
                        <footer class="card__status ${this.char.status}">
                            <span>Status:</span>
                            ${this.char.status.toUpperCase()}
                        </footer>
                    </main>
                </article>
            `
        );
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("char-ui", OneCharUI);
