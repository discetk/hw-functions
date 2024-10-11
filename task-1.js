/*1---------------- Вывести сумму чисел от 1 до N------------*/

function sumNumbers (random) {
    summa = 0
    for (let i = 1; i <= random; i++) {
        summa += i;
    }
    return summa;
}
console.log(sumNumbers(10));
