function isBaseInRange(base) {
    base = parseInt(base);

    if (base < 2 || base > 16) {
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


function executeBasicValidations(number, initialBase, finalBase){

    if (!isNumberInBase(number, initialBase)) {
        return "Please enter a valid number in the initial base";
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

    return "";
}

function executeIntegerValidations(number,initialBase,finalBase){

    if (!isInteger(initialBase)) {
        return "Please enter an integer initial base";
    }

    return "";
}

function executeBaseRangeValidations(initialBase, finalBase){
    if (!isBaseInRange(initialBase)) {
        return "Please enter a valid initial base";
    }

    return "";
}

function valiedate(number,initialBase, finalBase){
    let result = executeNullValidations(number,initialBase,finalBase);
    if(result !== ""){
        return result;
    }

    result = executeIntegerValidations(number,initialBase,finalBase);
    if(result !== ""){
        return result;
    }

    result = executeBaseRangeValidations(initialBase, finalBase);
    if(result !== ""){
        return result;
    }

    result = executeBasicValidations(number, initialBase, finalBase);
    if(result !== ""){
        return result;
    }

    return "";
}