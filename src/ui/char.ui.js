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
            .card-container{
                width: 100%;
                border: red solid 3px;
                margin: 1rem;
                display: flex;
                flex-direction; row;
            }
            
            .card-img{
                width: 100%;
                height: auto;
                border-radius:10px;
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
                <article class="card-container">
                        <figure>
                            <img class="card-img" src="${this.char.image}"/>
                        </figure>
                        <main class="card-info">
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
                        </main>
                </article>
        `
    }
}

customElements.define("char-ui", OneCharUI)