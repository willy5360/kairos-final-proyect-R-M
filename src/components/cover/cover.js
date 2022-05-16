import { html, LitElement } from "lit";
import "./cover.css"

export class BackgroundVideo extends LitElement {


    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`
            <main class="cover-container">
                <video
                    class="cover-video"
                    src="https://res.cloudinary.com/willykronara/video/upload/v1652292964/trailer4_fninv7.mp4"
                    autoplay
                    loop
                    muted
                ></video>
                <h1>Rick and Morty</h1>
                <p>A fan page made with love</p>
            </main>
        `;
    }

    createRenderRoot(){
        return this;
    }

}

customElements.define("back-video", BackgroundVideo);
