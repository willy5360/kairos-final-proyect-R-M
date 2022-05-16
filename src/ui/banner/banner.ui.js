import { html, LitElement } from "lit";

import "./banner.ui.css";

export class Banner extends LitElement {
    static get properties() {
        return {
            title: {
                type: String,
            },
            subtitle:{
                type: String
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();
    }


    render() {
        return html` 
            <section class="banner__container">
                <h1 class="banner__title">${this.title}</h1>
                <p class="banner__subtitle">${this.subtitle}</p>
            </section>
                `
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("app-banner", Banner);
