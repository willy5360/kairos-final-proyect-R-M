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
                position:relative;
                width: 18rem;
                height:20rem;
                background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
                border-radius:10px;
                margin: 13rem 1rem 1rem 1rem;
                transition: box-shadow 0.3s ease-in-out;  
            }

            .card-container:hover{
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
            
            .card-img{
                position:absolute;
                top:-30%;
                left:15%;
                width: 70%;
                height: auto;
                border-radius:0.5rem;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;  
            }
            
            .card-info{
                padding: 6rem 1.5rem;
            }
            .card-info h1 {
                text-align:center;
                color:white;
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