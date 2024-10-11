/* -------------------- 10. Сумма квадратов чисел от 1 до N ----------*/ 
function sumquad (number) {
    let result = 0;
    for (let i = 1; i <=number; i++) {
        result = result + i * i;
    }
    return result;
}
console.log(sumquad(3));