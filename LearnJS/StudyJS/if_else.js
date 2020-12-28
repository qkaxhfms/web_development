// if
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
if (year == 2015) alert( '정답입니다!' );

/*
불린형으로의 변환
if (…) 문은 괄호 안의 표현식을 평가하고 그 결과를 불린값으로 변환합니다.
형 변환 챕터에서 배운 형 변환 규칙을 잠시 상기해 봅시다.
*/

/*
숫자 0, 빈 문자열"", null, undefined, NaN은 불린형으로 변환 시 모두 false가 됩니다.
이런 값들은 ‘falsy(거짓 같은)’ 값이라고 부릅니다.
이 외의 값은 불린형으로 변환시 true가 되므로 ‘truthy(참 같은)’ 값이라고 부릅니다.
*/

/* if함수 */
let accessAllowed;
let age = prompt('나이를 입력해 주세요.', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

/* if함수 ? 포함 */
let accessAllowed = (age > 18) ? true : false;

