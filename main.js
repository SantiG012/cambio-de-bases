var number;
var initialBase;
var finalBase;

function getNeededValues() {
    number = getNumber();
    initialBase = getInitalBase();
}

function convertNumberToDecimalBase(number, base) {
    const dividedNumber =  number.split('.');
    let decimalResult = 0;

    decimalResult = convertIntPartToDecimal(dividedNumber[0], base);

    if (dividedNumber.length !== 1) {
        decimalResult += convertFloatPartToDecimalPart(dividedNumber[1], base);
    }

    return decimalResult.toString();
}

function convertDecimalToAnyBase(decimalNumber, base) {
    let dividedNumber = decimalNumber.split('.');
    let result = "";
    const intPart = dividedNumber[0];
    const floatPart = Number('.'+dividedNumber[1]);

    result = convertIntPartToAnyBase(intPart, base);
    
    if (dividedNumber.length !== 1) {
        result += "." + convertFloatPartToAnyBase(floatPart, base);
    }

    return result;
}

function calculate(){
    getNeededValues();

    const validationResult = valiedate(number,initialBase, finalBase);

    if (validationResult !== "") {
        alert(validationResult);
        return;
    }

    const decimalNumber = convertNumberToDecimalBase(number, initialBase);


    for (let i = 2; i < 17; i++) {
        const result = convertDecimalToAnyBase(decimalNumber, i);
        printConvertionResults(result, i);
    }
}