let first = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let second = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

module.exports = function toReadable (number) {
    if (number === 0) return "zero";
    if (number <= 19) return first[number];
    else {
        let numString = String(number);
        let result;
        switch (numString.length) {
            case 2: {
                if(numString[1] == "0") result = second[numString[0]];
                else result = second[numString[0]] + " " + first[numString[1]];
                break;
            }
            case 3: {
                result = first[numString[0]] + " hundred ";
                if(numString[1] != "0" && numString[1] != "1") result += second[numString[1]] + " ";
                if(numString[2] != "0" && numString[1] != "1") result += first[numString[2]];
                if(numString[1] == "1") result += first[10 + +numString[2]];

                break;
            }
        }
        return result.trim();
    }
}
