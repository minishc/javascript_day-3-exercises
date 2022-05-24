function month() {
    result = undefined;
    input = prompt("Enter a year and a month in form of example: 2019 2");
    values = String(input).split(" ");
    if(isThisALeapYear(values[0]) && values[1] == 2) {
        result = 29;
    }
    else if(values[1] % 2 == 0) {
        if(values[1] == 2) {
            result = 28;
        }
        else {
            result = 30;
        }
    }
    else {
        result = 31;
    }

    return result;
}