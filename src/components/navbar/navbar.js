import { html, LitElement } from "lit";
import "./navbar.css";

export class Navbar extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        const NAVBAR = document.querySelector("navigation-bar");
        console.log(NAVBAR)
        window.addEventListener("scroll", () => {
            NAVBAR.classList.toggle("sticky", window.scrollY > 0);
        });
    }

    toTheTop(){
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    render() {
        return html`
            <nav class="navbar">
                <a class="navbar--logo" href="/">
                    <figure @click="${this.toTheTop}">
                        <img
                            src="https://res.cloudinary.com/willykronara/image/upload/v1652297906/logo_ma6jsh.png"
                            alt="rick and morty logo"
                        />
                        <h1 class="font-large">Rick and morty</h1>

                    </figure>
                </a>
                <a class="font-medium" href="/">Home</a>
                <a class="font-medium" href="/character">Character</a>
                <a class="font-medium" href="/people">People</a>
            </nav>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("navigation-bar", Navbar);
