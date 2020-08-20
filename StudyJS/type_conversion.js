/*
함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환됩니다.
이런 과정을 "형 변환(type conversion)"이라고 합니다.
*/

/*
문자형으로 변환

alert메서드는 매개변수로 문자형을 받기 때문에,
alert(value)에서 value는 문자형이어야 합니다.
만약, 다른 형의 값을 전달받으면 이 값은 문자형으로 자동 변환됩니다.
*/
String(value) 함수를 호출해 전달받은 값을 문자열로 변환 할 수도 있습니다.

let value = true;
console.log(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
console.log(typeof value); // string

Number(value) 함수를 사용하면 주어진 값(value)을
숫자형으로 명시해서 변환할 수 있습니다.

let str = "123";
console.log(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.

console.log(typeof num); // number

Boolean 불린형으로 변환
숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 됩니다.
그 외의 값은 true로 변환됩니다.

console.log( Boolean(1) ); // 숫자 1(true)
console.log( Boolean(0) ); // 숫자 0(false)

console.log( Boolean("hello") ); // 문자열(true)
console.log( Boolean("") ); // 빈 문자열(false)