import {css, html, LitElement } from "lit";

export class OneCharUI extends LitElement{

    static get properties(){
        return {
            char: {
                type: Object || Array
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
            
            }
            
            
            .card-container{
                width: 70%;
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

            .card-info h1 {
                text-align: center
            }
        `
    }

    render(){
        return this.char && html`
            <div class="cards">
                <div class="card-container">
                        <img class="card-img" src="${this.char.image}"/>
                        <div class="card-info">
                            <h1>${this.char.name}</h1>
                            <p>Status: ${
                                this.char.status == "Alive"
                                    ? "Alive 🟢"
                                    : this.char.status == "Dead"
                                    ? "Dead ⚫️"
                                    : "Unknown 🟡"
                            }</p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                </div>
            </div>
        `
    }
}

customElements.define("char-ui", OneCharUI)