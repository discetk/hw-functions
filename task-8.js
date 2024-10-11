/*---------------8.Количество цифр в числе N--------*/

function amountNumbers (number) {
    let numbRemainder = 0;
    let k = 0;
    while (number > 0) {
        numbRemainder = number % 10;
        number = (number - numbRemainder) / 10;
        k += 1;
    }
    return k;
}
console.log(amountNumbers(549));