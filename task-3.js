/* 3-------------------  Вывести четные и нечетные числа от 1 до 100 -----*/

function evenNumb(n) {
    console.log('Четные:',);
    for (let i = 1; i <= n; i++ ) {
        if (i % 2 === 0) {
            console.log (i);
        }
    }
    return '';
}
console.log(evenNumb(100));

function oddNumb(n) {
    console.log("Нечетные:");
    for (let i = 1; i <= n; i++ ) {
        if (i % 2 != 0) {
            console.log (i);
        }
    }
    return '';
}
console.log(oddNumb(100))