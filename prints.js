function printConvertionResults(number, base){
    const paragraph= document.getElementById(base);

    paragraph.innerText = 'Base ' + base + ': ' + 'number: ' + number;
}