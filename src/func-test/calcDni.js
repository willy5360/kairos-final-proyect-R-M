export class dniCheck {
    aValidDni(dni) {
        if (typeof dni == "string" && dni.length != 0) {
            let dniSplitted = dni.split("");

            const lastLetter = [
                "T",
                "R",
                "W",
                "A",
                "G",
                "M",
                "Y",
                "F",
                "P",
                "D",
                "X",
                "B",
                "N",
                "J",
                "Z",
                "S",
                "Q",
                "V",
                "H",
                "L",
                "C",
                "K",
                "E",
            ];

            let dniLetter = dniSplitted.pop();
            let moduleDni = Number(dniSplitted.join("")) % 23;

            if (lastLetter[moduleDni] == dniLetter && dni.length == 9) return {
                status: "Ok",
                message: ""
            };
            else return {
                status: "Error",
                message: "DNI must have 9 characters where 8 are numbers and the last one is a letter"
            };
        } else {
            return {
                status: "Invalid",
                message: "Invalid Input"
            };
        }
    }
}
