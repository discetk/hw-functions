/*4----------------------Вывести проверку на простое число----------*/

let k = 0
function isPrimeNumb (number) {
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            k++;
        }
     }
    if (k === 2){
         return 'Простое число';
    }
    return 'Не простое число';
}
console.log(isPrimeNumb(13));