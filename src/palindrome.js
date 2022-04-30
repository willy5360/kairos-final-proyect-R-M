export class checkPalindrome {

    aValidPalindrome(sentence){
        if(typeof sentence === "string" && sentence.length != 0){

            let cleanSentenceLowerCase = sentence.toLowerCase().replace(/[\W_]/g, "")
            let reversedCleanedSentence = cleanSentenceLowerCase.split("").reverse().join("")

            if(cleanSentenceLowerCase === reversedCleanedSentence) return "It's a palindrome"
            else return "It's not a palindrome"
        } else {
            return "Invalid Input"
        }
    }
}