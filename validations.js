function validateBaseInRange(base) {
    const base = parseInt(base);

    if (base < 2 || base > 13) {
        return false;
    }

    return true;
}

function validateNumberInBase(number, base) {
    const regex = REGEX_EXPRESSIONS[base];
    return regex.test(number);
}

function validateNotNull(number) {
    if (number === "" || number === null) {
        return false;
    }

    return true;
}

function validateInteger(number) {
    if (number.includes(".")) {
        return false;
    }

    return true;
}

function validateEqualBases(initialBase, finalBase) {
    if (initialBase === finalBase) {
        return true;
    }

    return false;
}