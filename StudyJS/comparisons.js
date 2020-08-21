//Boolean 반환

console.log( 2 > 1 );  // true
console.log( 2 == 1 ); // false
console.log( 2 != 1 ); // true

// 문자열 비교
/*
'사전' 순으로 문자열 비교
*/

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

/*
자바스크립트의 문자열 비교 알고리즘은 사전이나 전화번호부에서
사용되는 정렬 알고리즘과 아주 유사하지만,
완전히 같진 않습니다.

차이점 중 하나는 자바스크립트는 대·소문자를 따진다

대문자 "A"와 소문자 "a"를 비교했을 때 소문자 "a"가 더 큽니다.
자바스크립트 내부에서 사용되는 인코딩 표인 유니코드에선
소문자가 대문자보다 더 큰 인덱스를 갖기 때문입니다.
*/

console.log( '2' > 1 ); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
console.log( '01' == 1 ); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.

// 불린값의 경우 true는 1, false는 0으로 변환된 후 비교가 이뤄집니다.
console.log( true == 1 ); // true
console.log( false == 0 ); // true

// 일치 연산자
console.log( 0 == false ); // true
console.log( '' == false ); // true

// Null과 undifined

console.log( null === undefined ); // false
console.log( null == undefined ); // true

/*
null과 undefined는 숫자형으로 변환됩니다.
null은 0, undefined는 NaN으로 변합니다.
*/

/*
비교 연산자는 불린값을 반환합니다.
문자열은 문자 단위로 비교되는데, 이때 비교 기준은 '사전’순입니다.
서로 다른 타입의 값을 비교할 땐 숫자형으로 형 변환이 이뤄지고 난 후 비교가 진행됩니다(일치 연산자는 제외).
null과 undefined는 동등 비교(==) 시 서로 같지만 다른 값과는 같지 않습니다.
null이나 undefined가 될 확률이 있는 변수가 > 또는 <의 피연산자로 올 때는 주의를 기울이시기 바랍니다.
null/undefined 여부를 확인하는 코드를 따로 추가하는 습관을 들이길 권유합니다.
*/