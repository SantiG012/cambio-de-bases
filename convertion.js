const DIGIT_PATTERN = /[0-9]/;

function convertIntPartToDecimal(intNumber, initialBase){
    let decimalNumber = 0;
    let power = 0;
    let numberLength = intNumber.length;


    for (i = 0; i < numberLength; i++) {
        power = numberLength - i - 1;
        digit = intNumber[i];

        if (!DIGIT_PATTERN.test(digit)) {
            digit = convertLetterIntoNumber(digit);
        }

        decimalNumber += digit * Math.pow(initialBase, power);
    }

    return decimalNumber;
}

function convertFloatPartToDecimalPart(floatNumber,initialBase){
    let decimalNumber = 0;
    let power = -1;
    let numberLength = floatNumber.length;


    for(i = 0; i < numberLength; i++){
        digit = floatNumber[i];

        if (!DIGIT_PATTERN.test(digit)) {
            digit = convertLetterIntoNumber(digit);
        }

        decimalNumber += digit * Math.pow(initialBase, power);
        power--;
    }

    return decimalNumber;

}