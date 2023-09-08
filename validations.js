function isBaseInRange(base) {
    base = parseInt(base);

    if (base < 2 || base > 13) {
        return false;
    }

    return true;
}

function isNumberInBase(number, base) {
    const regex = REGEX_EXPRESSIONS[base];
    return regex.test(number);
}

function isNull(number) {
    if (number === "" || number === null) {
        return true;
    }

    return false;
}

function isInteger(number) {
    if (number.includes(".")) {
        return false;
    }

    return true;
}

function areBasesEqual(initialBase, finalBase) {
    if (initialBase === finalBase) {
        return true;
    }
    return false;
}

function executeBasicValidations(number, initialBase, finalBase){

    if (!isNumberInBase(number, initialBase)) {
        return "Please enter a valid number in the initial base";
    }

    if (areBasesEqual(initialBase, finalBase)) {
        return "The bases must be different";
    }

    return "";
}

function executeNullValidations(number,initialBase,finalBase){
    if (isNull(number)) {
        return "Please enter a number";
    }

    if (isNull(initialBase)) {
        return "Please enter an initial base";
    }

    if (isNull(finalBase)) {
        return "Please enter a final base";
    }

    return "";
}

function executeIntegerValidations(number,initialBase,finalBase){
    if (!isInteger(number)) {
        return "Please enter an integer number";
    }

    if (!isInteger(initialBase)) {
        return "Please enter an integer initial base";
    }

    if (!isInteger(finalBase)) {
        return "Please enter an integer final base";
    }

    return "";
}

function executeBaseRangeValidations(initialBase, finalBase){
    if (!isBaseInRange(initialBase)) {
        return "Please enter a valid initial base";
    }

    if (!isBaseInRange(finalBase)) {
        return "Please enter a valid final base";
    }

    return "";
}