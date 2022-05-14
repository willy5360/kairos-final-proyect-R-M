import { html, LitElement } from "lit"
import { TrailerInfo } from "../../repositories/trailers-data.repository"
import { MainCharactersInfo } from "../../repositories/main-characters.repository"


import "../../components/contact-form/contact-form"
import "../../components/main-characters/main-characters"
import "../../components/cover/cover"
import "../../ui/trailers/trailer.ui"
import "../../ui/banner/banner.ui"
import "./home.page.css"

export class Home extends LitElement {

    static get properties(){
        return {
            trailers:{
                type: Array
            },
            mainCharacters:{
                type: Array
            }
        }
    }

    connectedCallback(){
        super.connectedCallback()
        this.trailers = TrailerInfo
        this.mainCharacters = MainCharactersInfo
    }

    render(){
        return html`
        <main class="home__container">
            <back-video></back-video>
            <home-banner .title="${"Meet the characters!"}"></home-banner>
            <main-characters .mainCharacters="${this.mainCharacters}"></main-characters>
            <home-banner .title="${"Watch season trailers!"}"></home-banner>
            <season-trailers .trailers="${this.trailers}"></season-trailers>
            <contact-form></contact-form>
            
        </main>
        `
    }

    createRenderRoot(){
        return this
    }
}



customElements.define("home-page", Home)