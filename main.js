var number;
var initialBase;
var finalBase;

function getNeededValues() {
    number = getNumber();
    initialBase = getInitalBase();
}

function convertNumberToDecimal(number, base) {
    const dividedNumber =  number.split('.');
    let decimalResult = 0;

    decimalResult = convertIntPartToDecimal(dividedNumber[0], base);

    if (dividedNumber.length !== 1) {
        decimalResult += convertFloatPartToDecimalPart(dividedNumber[1], base);
    }

    return decimalResult;
}

function calculate(){
    getNeededValues();

    const validationResult = valiedate(number,initialBase, finalBase);

    if (validationResult !== "") {
        alert(validationResult);
        return;
    }

    const decimalNumber = convertNumberToDecimal(number, initialBase);

    console.log(decimalNumber);
}