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

function convertIntPartToAnyBase(decimalNumber, finalBase){
    let finalNumber = [];
    let quotient = decimalNumber;
    let digit = 0;

    do{
        digit = quotient % finalBase;

        quotient = Math.floor(quotient / finalBase);

        if(digit>9){
            digit = convertNumberIntoLetter(digit);
        }

        finalNumber.unshift(digit);

    }while(quotient > 0);

    return finalNumber.join('');
}

function convertFloatPartToAnyBase(floatNumber, finalBase){
    let finalNumber = "";
    const multiplier = finalBase;
    let digit = 0;
    let product = 0;
    let precision = 0;

    console.log(floatNumber);

    do{
        product = floatNumber * multiplier;
        digit = Math.floor(product);
        floatNumber = product - digit;

        console.log(product, digit, floatNumber);

        if(digit>9){
            digit = convertNumberIntoLetter(digit);
        }

        finalNumber += digit;

        precision++;
    }while(floatNumber > 0 && precision < 10);

    return finalNumber;

}