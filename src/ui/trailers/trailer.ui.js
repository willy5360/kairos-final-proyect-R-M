import { html, LitElement } from "lit";
import "./trailers.css";

export class SeasonTrailers extends LitElement {
    static get properties() {
        return {
            trailers: {
                type: Array,
            },
        };
    }

    connectedCallback() {
        super.connectedCallback();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <article class="trailers-container">
                ${this.trailers.map(
                    (trailer) => html`
                        <a
                            class="trailer__video-container"
                            href="${trailer.youtubeUrl}"
                            id="season__${trailer.season} "
                            target="_blank"
                        >
                            <video
                                class="trailer-video"
                                src="${trailer.url}"
                                autoplay
                                loop
                                muted
                            ></video>
                            <h1>Season ${trailer.season}</h1>
                        </a>
                    `
                )}
            </article>
        `;
    }
}

customElements.define("season-trailers", SeasonTrailers);
