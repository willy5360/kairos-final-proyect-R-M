export class isEvenOrOdd {

    evenOrOdd(num){
        if(typeof num == "number"){
            if(num%2 === 0 && num !== 0) return "Es par"
            else if(num%2 !==0 && num !== 0) return "Es impar"
            else return "No es un numero valido"

        } else {
            return "No es un numero"
        }
    }
}