import { html, LitElement } from "lit"
import { TrailerInfo } from "../../repositories/trailers-data.repository"
import { MainCharactersInfo } from "../../repositories/main-characters.repository"
import 'genk-banner/genk-banner.js';

import "../../components/main-characters/main-characters"
import "../../components/cover/cover"
import "../../components/footer/footer"

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
            <genk-banner .title="${"Meet the characters!"}" .subtitle="${"Before you hate them..."}"></genk-banner>
            <!-- <app-banner .title="${"Meet the characters!"}" .subtitle="${"Before you hate them..."}"></app-banner> -->
            <main-characters .mainCharacters="${this.mainCharacters}"></main-characters>
            <!-- <app-banner .title="${"Watch season trailers!"}" .subtitle="${"...if you like to be spoiled"}"></app-banner> -->
            <genk-banner .title="${"Watch season trailers!"}" .subtitle="${"...if you like to be spoiled"}"></genk-banner>
            <season-trailers .trailers="${this.trailers}"></season-trailers>
            <main-footer></main-footer>
            
        </main>
        `
    }

    createRenderRoot(){
        return this
    }
}



customElements.define("home-page", Home)