
function capitalize(inString) {
    let capString;

    capString = inString.charAt(0).toUpperCase() + inString.slice(1);

    return capString;
}


export default capitalize;