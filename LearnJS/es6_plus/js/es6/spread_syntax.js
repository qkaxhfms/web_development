// Spread Syntax
// 전개 구문
//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax

{
    const obj1 = {key:'key1'};
    const obj2 = {key:'key2'};
    const array = [obj1, obj2];
    console.log(array);

    // array copy
    const arrayCopy = [...array];
    console.log(arrayCopy);

    const arrayCopy2 = [...array, {key:'key3'}];
    console.log(array,arrayCopy,arrayCopy2);
}