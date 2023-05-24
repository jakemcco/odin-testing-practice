//Helper functions
function isUpperCase(string) {
    return string === string.toUpperCase();
};

//Helper function to reverse lookup an object key given the value
function getObjKeyOfVal(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
}

//Should only accept integers 0 to 25, don't support negatives to simplify
function caesarCipher(inString, shiftFactor) {
    let result = "";
    //Prevent cycles with large shift factors,  shift factor of 0 is equal to 26, 52, etc...n = n%26
    const reducedShiftFactor = shiftFactor % 26;

    //Manual enumeration of alphabet, alternatively we could use UTF-16 charcodes which have the alphabet in sequential order starting with a:65, ending with z:90
    const dict = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    }

    //Break string apart into an array of characters
    let unmodArr = inString.split("");

    for (const char of unmodArr){
        //toLowerCase() handles symbols and spaces without throwing an error
        let lowerChar = char.toLowerCase();
        //Test character for alphabetic, if not --> retain character/symbol/spacing
        if(!(lowerChar in dict)) {
            result += char;
        }
        //Otherwise we're alphabetic with a key in the dict
        else {
            let isCapitalized = isUpperCase(char);
            let origIndex = dict[lowerChar];
            let newIndex = (origIndex + reducedShiftFactor) % 26;
            let newChar = getObjKeyOfVal(dict, newIndex);
            if (isCapitalized) newChar = newChar.toUpperCase();
            result += newChar;
        }
    }

    return result;
}

export default caesarCipher;