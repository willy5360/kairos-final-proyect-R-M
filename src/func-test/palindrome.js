export class checkPalindrome {

    verifier(sentence){
        if(typeof sentence === "string" && sentence.length != 0){

            let cleanSentenceLowerCase = sentence.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "").toLowerCase()
            let reversedCleanedSentence = cleanSentenceLowerCase.split("").reverse().join("")

            if(cleanSentenceLowerCase === reversedCleanedSentence) return "It's a palindrome"
            else return "It's not a palindrome"
        } else {
            return "Invalid Input"
        }
    }
}