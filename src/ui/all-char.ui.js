import {css, html, LitElement } from "lit";

export class AllCharsUI extends LitElement{

    static get properties(){
        return {
            chars: {
                type: Array
            }
        }
    }

    static get styles(){
        return css`
            .cards{
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                justify-content: space-around;
                border: blue solid 3px;
            
            }
            
            
            .card-container{
                width: 18rem;
                border: red solid 3px;
                margin: 1rem;
            }
            
            .card-img{
                width: 100%;
                height: auto;
            }
            
            .card-info{
                padding: 0.5rem;
            }
        `
    }

    render(){
        return html`
            <div class="cards">
                ${this.chars && this.chars.map(char => html`
                    <div class="card-container">
                            <img class="card-img" src="${char.image}"/>
                            <div class="card-info">
                                <h1>${char.name}</h1>
                                <p>Status: ${
                                    char.status == "Alive"
                                        ? "Alive 🟢"
                                        : char.status == "Dead"
                                        ? "Dead ⚫️"
                                        : "Unknown 🟡"
                                }</p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                    </div>
                `)}
            </div>`
    }
}

customElements.define("all-chars", AllCharsUI)