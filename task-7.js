/*-------------7. Обратное число------------*/

function numbReverse (number) {
    let result = '';
    let numbRemainder = 0;
    while (number >= 1) {
        numbRemainder = number % 10;
        number = (number - numbRemainder) / 10;
        result += numbRemainder;
    }
    return result;
}
console.log(numbReverse(571));
