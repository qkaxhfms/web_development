//단항,이항,피연산자

/*
피연산자 : 연산자가 연산을 수행하는 대상
*/

let x = 1;
x = -x;
console.log(x); // -1

/*
이항연산자 '+' 와 문자열 연결
*/

let s ="my"+"string";
console.log(s); //mystring

/*
단항연산자 '+' 와 숫자형으로의 변환
*/

let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
console.log( +true ); // 1
console.log( +"" );   // 0

// 복합 할당 연산자
let n = 2;
n += 5; // n은 7이 됩니다(n = n + 5와 동일).
n *= 2; // n은 14가 됩니다(n = n * 2와 동일).