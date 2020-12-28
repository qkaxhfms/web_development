//논리 연산자

/*
|| OR
인수 중 하나라도 true이면 true를 반환하고, 그렇지 않으면 false를 반환한다.
*/
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

/*
연산 과정에서 숫자 1은 true로, 숫자 0은 false로 바뀐다.
*/
if (1 || 0) { // if( true || false ) 와 동일하게 동작합니다.
    console.log( 'truthy!' );
}

/*
가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
각 피연산자를 불린형으로 변환합니다.
변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.
피연산자 모두를 평가한 경우(모든 피연산자가 false로 평가되는 경우)엔 마지막 피연산자를 반환합니다.

OR ||을 사용하면 실제 값이 들어있는 변수를 찾고, 그 값을 보여줄 수 있습니다.
변수 모두에 값이 없는 경우엔 익명를 보여줍시다.
*/

console.log( 1 || 0 ); // 1 (1은 truthy임)
console.log( null || 1 ); // 1 (1은 truthy임)
console.log( null || 0 || 1 ); // 1 (1은 truthy임)
console.log( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)

true || console.log("not printed");
false || console.log("printed");

/*
&& AND
전통적인 프로그래밍에서 AND 연산자는 두 피연산자가 모두가 참일 때 true를 반환한다.
그 외의 경우는 false를 반환한다.
*/

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

/*
가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가한다.
각 피연산자는 불린형으로 변환됩니다.
변환 후 값이 false이면 평가를 멈추고 해당 피연산자의 변환 전 원래 값을 반환한다.
피연산자 모두가 평가되는 경우(모든 피연산자가 true로 평가되는 경우)엔 마지막 피연산자가 반환된다.
*/

/*
AND 연산자가 첫 번째 falsy를 반환하는 반면, OR은 첫 번째 truthy를 반환한다.
*/

console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5
console.log( null && 5 ); // null
console.log( 0 && "아무거나 와도 상관없습니다." ); // 0

/*
! NOT
NOT 연산자는 인수를 하나만 받고, 다음 순서대로 연산을 수행합니다.
*/

console.log( !true ); // false
console.log( !0 ); // true

/*
NOT을 두 개 연달아 사용(!!)하면 값을 불린형으로 변환할 수 있다.
*/

console.log( !!"non-empty string" ); // true
console.log( !!null ); // false

console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false