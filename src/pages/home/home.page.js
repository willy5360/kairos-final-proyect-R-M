import { html, LitElement } from "lit"
import { TrailerInfo } from "../../repositories/trailers-data.repository"

import "../../components/contact-form/contact-form"
import "../../components/cover/cover"
import "../../ui/trailers/trailer.ui"

export class Home extends LitElement {

    static get properties(){
        return {
            trailers:{
                type: Array
            }
        }
    }

    connectedCallback(){
        super.connectedCallback()
        this.trailers = TrailerInfo
    }

    render(){
        return html`
            <back-video></back-video>
            <contact-form></contact-form>
            <season-trailers .trailers="${this.trailers}"></season-trailers>
        `
    }

    createRenderRoot(){
        return this
    }
}



customElements.define("home-page", Home)