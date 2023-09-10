const REGEX_EXPRESSIONS = {
    "2":/^[0-1]+\.?[0-1]+$/,
    "3":/^[0-2]+\.?[0-2]+$/,
    "4":/^[0-3]+\.?[0-3]+$/,
    "5":/^[0-4]+\.?[0-4]+$/,
    "6":/^[0-5]+\.?[0-5]+$/,
    "7":/^[0-6]+\.?[0-6]+$/,
    "8":/^[0-7]+\.?[0-7]+$/,
    "9":/^[0-8]+\.?[0-8]+$/,
    "10":/^[0-9]+\.?[0-9]+$/,
    "11":/^[0-9A]+\.?[0-9A]*$/,
    "12":/^[0-9A-B]+\.?[0-9A-B]*$/,
    "13":/^[0-9A-C]+\.?[0-9A-C]*$/,
    "14":/^[0-9A-D]+\.?[0-9A-D]*$/,
    "15":/^[0-9A-E]+\.?[0-9A-E]*$/,
    "16":/^[0-9A-F]+\.?[0-9A-F]*$/,
}

const LETTERS_EQUIVALENCE = {
    "A":10,
    "B":11,
    "C":12,
    "D":13,
    "E":14,
    "F":15,
}

const NUMBER_EQUIVALENCE = {
    10:"A",
    11:"B",
    12:"C",
    13:"D",
    14:"E",
    15:"F",
}