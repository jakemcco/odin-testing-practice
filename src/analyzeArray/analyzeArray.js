
//Accepts an array of numbers,  should not contain any missing elements or non-numerics
const analyzeArray = (arr) => {
    let arrLen = arr.length;

    let output = {
        average: null,
        min: null,
        max: null,
        length: arrLen
    }

    //Keep null values unless the array actually have elements to operate on
    if (arrLen > 0) {
        const result = arr.reduce((acc, curr) => {
            acc.sum += curr;
            acc.min = (curr < acc.min) ? curr : acc.min;
            acc.max = (curr > acc.max) ? curr : acc.max;
            return acc;
        }, {sum: 0, min: arr[0], max: arr[0]});//This last object is the initial value of the accumulator to prime the loop

        output.min = result.min;
        output.max = result.max;
        output.average = result.sum/arrLen;
    }

    return output;
}


export default analyzeArray;