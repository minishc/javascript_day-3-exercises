function isLeapYear() {
    input = undefined;
    result = "";
    while(!isNumber(input)) {
        input = parseInt(prompt("Enter a year to check if it is a leap year"));
    }

    if(input % 4 != 0) {
        result = "Common Year";
    }
    else if(input % 100 != 0) {
        result = "Leap Year";
    }
    else if(input % 400 != 0) {
        result = "Common Year";
    }
    else {
        result = "Leap Year";
    }

    return result;
}

function isThisALeapYear(input) {
    if(input % 4 != 0) {
        result = false;
    }
    else if(input % 100 != 0) {
        result = true;
    }
    else if(input % 400 != 0) {
        result = false;
    }
    else {
        result = true;
    }

    return result;
}