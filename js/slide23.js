function smaller() {

    input1 = undefined;
    input2 = undefined;
    while(!isNumber(input1)) {
        input1 = parseInt(prompt("Enter an integer"));
    }
    while(!isNumber(input2)) {
        input2 = parseInt(prompt("Enter a second integer"));
    }

    input1 < input2 ? result = input1 : result = input2;
    return result;
}

function isSmaller(number1, number2) {
    return number1 < number2 ? number1 : number2;
    
}

function smaller3() {

    input1 = undefined;
    input2 = undefined;
    input3 = undefined;
    while(!isNumber(input1)) {
        input1 = parseInt(prompt("Enter an integer"));
    }
    while(!isNumber(input2)) {
        input2 = parseInt(prompt("Enter a second integer"));
    }
    while(!isNumber(input3)) {
        input3 = parseInt(prompt("Enter a second integer"));
    }
    
    return isSmaller(isSmaller(input1, input2), input3);
}