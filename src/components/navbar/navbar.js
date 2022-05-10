import { css, html, LitElement } from "lit";
import "./navbar.css";

export class Navbar extends LitElement {
    static get styles() {
        return css`
            :host {
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                z-index: 1;
                background-color: tomato;
            }

            :host .navbar {
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-around;
                text-decoration: none;
            }
        `;
    }

    render() {
        return html`
            <nav class="navbar">
                <h1><a href="/"> Rick and morty </a></h1>
                <a href="/">home</a>
                <a href="/character">character</a>
                <a href="/people">people</a>
            </nav>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        const NAVBAR = document.querySelector("navigation-bar");
        window.addEventListener("scroll", () => {
            NAVBAR.classList.toggle("sticky", window.scrollY > 0);
        });
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("navigation-bar", Navbar);
