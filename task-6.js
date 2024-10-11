/*-----------------Вывести сумму цифр числа N --------------------------------------------------- */
let numbRemainder = 0;
let result = 0

function sumNumbers (number) {
    while (number > 0) {
        numbRemainder = number % 10;
        number = (number - numbRemainder) / 10;
        result += numbRemainder;
    }
    return result;
}
console.log(sumNumbers(561));

  