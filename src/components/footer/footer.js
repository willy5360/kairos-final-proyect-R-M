import { html, LitElement } from "lit";

import "./footer.css";

export class Footer extends LitElement {
    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`
            <footer class="footer__container">
                <header class="footer-info">
                    <h1 class="footer-info__text">
                        Williams Frank Padilla Flores
                    </h1>
                    <section class="footer-button__container">
                        <a href="https://gitlab.com/willy5360" target="_blank"
                            ><span class="fa-brands fa-gitlab"></span
                        ></a>
                        <a href="https://github.com/willy5360" target="_blank"
                            ><span class="fa-brands fa-github"></span
                        ></a>
                        <a href="https://www.linkedin.com/in/williamspadillaflores/" target="_blank"
                            ><span class="fa-brands fa-linkedin"></span
                        ></a>
                    </section>
                </header>
                <form
                    class="contact-form__container"
                    action="mailto:willy5360@hotmail.com"
                    method="post"
                    enctype="text/plain"
                >
                    <h1 class="form-title">Contact me!</h1>
                    <label htmlFor="your-name">Name</label>
                    <input
                        class="form-input"
                        type="text"
                        name="your-name"
                        id="input-name"
                        placeholder="Name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        class="form-input"
                        type="text"
                        name="email"
                        id="input-email"
                        placeholder="Email"
                    />
                    <label htmlFor="comments">Comments</label>
                    <textarea rows="10" cols="50" name="comments"></textarea>
                    <input
                        class="form-send__button"
                        type="submit"
                        name="submit"
                        value="Send"
                    />
                </form>
            </footer>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("main-footer", Footer);
