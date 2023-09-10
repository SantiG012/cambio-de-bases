function convertLetterIntoNumber(letter) {
  return LETTERS_EQUIVALENCE[letter.toUpperCase()];
}

function convertNumberIntoLetter(number) {
  return NUMBER_EQUIVALENCE[number];
}

function convertLettersIntoNumbers(mixNumber) {
  const PATTERN = /[0-9]/;
  const mixArray = mixNumber.split('');

  const numberArray = mixArray.map(function (mixValue) {

    if (!PATTERN.test(mixValue)) {
      return convertLetterIntoNumber(mixValue.toUpperCase());
    }

    return mixValue;
  });

  return numberArray.join('');

}

