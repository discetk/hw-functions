/*2------------------------------------ Вывести факториал числа N -----------*/

function factorNumb (numb) {
    for (let i = numb - 1; i > 1; i--) {
        numb =  numb  * i ;
    }
    return numb;
}
console.log (factorNumb(5));
