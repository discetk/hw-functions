/*-------------9. Проверка палиндрома для числа N------*/

function isPalindrom (number) {
    let numbReverse = 0;
    let numbRemainder = 0;
    let result = '';
    let i = number
    while (i > 0) {
        numbRemainder = i % 10;
        i = (i - numbRemainder) / 10;
        numbReverse = (numbReverse * 10) + numbRemainder;
        
    }

    if (number === numbReverse) {
        result = "палиндром";
    } else {
        result = "не палиндром";
    }
    return result;
}
console.log(isPalindrom(117));
