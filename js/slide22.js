function isNumber(input) {
    return !isNaN(parseInt(Number(input))) ||
        !isNaN(parseFloat(Number(input)));
}

function convertToNumber(input) {
    if(isNumber(input)) {
        return parseInt(input);
    }
}

console.log(isNumber("23") + " " + convertToNumber("23"));
console.log(isNumber("a23") + " " + convertToNumber("a23"));
console.log(isNumber("2j3") + " " + convertToNumber("2j3"));