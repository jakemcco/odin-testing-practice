function reverseString(inString) {
    let reversed ='';

    for (let i = (inString.length-1); i >=0; i--) {
        reversed += inString.charAt(i);
    }

    return reversed;
}

export default reverseString;