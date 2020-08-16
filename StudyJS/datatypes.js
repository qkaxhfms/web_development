/*
자바스크립트에서 값은 항상 문자열이나 숫자형 같은 특정한 자료형에 속합니다.
*/


//숫자형
let n = 123;
n = 12.345;

//Infinity : 어떤 숫자보다 큰 특수 값, 무한대(∞)를 나타냅니다
//어느 숫자든 0으로 나누면 무한대를 얻을 수 있습니다.

console.log( 1 / 0 );
//or
console.log(Infinity);

//Nan : 계산 중에 에러가 발생했다는 것을 나타내주는 값
console.log("숫자가아님"/2); //Nan

/*
BigInt
표준으로 채택된 지 얼마 안 된 자료형, 길이에 상관없이 정수를 나타낼 수 있습니다.
BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있습니다.
*/

const bigInt = 1234567890123456789012345678901234567890n;

//문자열
/*
큰따옴표: "Hello"
작은따옴표: 'Hello'
역 따옴표(백틱, backtick): `Hello`
*/
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";
// 변수를 문자열 중간에 삽입
console.log( `Hello, ${name}!` ); // Hello, John!
// 표현식을 문자열 중간에 삽입
console.log( `the result is ${1 + 2}` ); // the result is 3

//불린형
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)

//불린값은 비교 결과를 저장할 때도 사용됩니다.
let isGreater = 4 > 1;
console.log( isGreater ); // true (비교 결과: "yes")

//null 값
/*
null 값은 지금까지 소개한 자료형 중 어느 자료형에도 속하지 않는 값입니다.
null 값은 오로지 null 값만 포함하는 별도의 자료형을 만듭니다.
*/
let age = null;
