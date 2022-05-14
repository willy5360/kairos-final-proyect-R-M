import { html, LitElement } from "lit";

import "./banner.ui.css"

export class Banner extends LitElement{

    static get properties(){
        return {
            title:{
                type: String
            }
        }
    }

    connectedCallback(){
        super.connectedCallback()
    }

    render(){
        return html`
            <!-- <svg
                class="aboutwave"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#F05454"
                    fill-opacity="1"
                    d="M0,96L24,90.7C48,85,96,75,144,90.7C192,107,240,149,288,165.3C336,181,384,171,432,154.7C480,139,528,117,576,133.3C624,149,672,203,720,234.7C768,267,816,277,864,266.7C912,256,960,224,1008,224C1056,224,1104,256,1152,256C1200,256,1248,224,1296,176C1344,128,1392,64,1416,32L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                >
                </path>
            </svg> -->
            <h1 class="main_character__tittle">
            ${this.title}</h1>
        `
    }

    createRenderRoot(){
        return this;
    }
}

customElements.define("home-banner", Banner)