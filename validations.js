function isBaseInRange(base) {
    const base = parseInt(base);

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