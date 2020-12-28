// 객체

let user = new Object(); // '객체 생성자' 문법
let user = {};  // '객체 리터럴' 문법

/*
리터럴과 프로퍼티
중괄호 {...} 안에는 ‘키: 값’ 쌍으로 구성된 프로퍼티가 들어갑니다.
*/

let user = {     // 객체
    name: "John",  // 키: "name",  값: "John"
    age: 30        // 키: "age", 값: 30
};

// 프로퍼티 값 얻기
console.log( user.name ); // John
console.log( user.age ); // 30

/*
프로퍼티 값엔 모든 자료형이 올 수 있다.
불린형 프로퍼티를 추가.
*/

user.isAdmin = true;

/*
delete 연산자를 사용하면 프로퍼티를 삭제
*/

delete user.age;

/*
여러 단어를 조합해 프로퍼티 이름을 만든 경우엔 프로퍼티 이름을 따옴표로 묶어줘야 한다.
*/
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // 복수의 단어는 따옴표로 묶어야 합니다.
};

/*
마지막 프로퍼티 끝은 쉼표로 끝날 수 있다.
*/

let user = {
    name: "John",
    age: 30,
}

// 대괄호 표기법

user.likes birds = true;
/*
'점’은 키가 '유효한 변수 식별자’인 경우에만 사용할 수 있다.
유효한 변수 식별자엔 공백이 없어야 한다.
또한 숫자로 시작하지 않아야 하며 $와 _를 제외한 특수 문자가 없어야 한다.
*/

let user = {};
// set
user["likes birds"] = true;
// get
console.log(user["likes birds"]); // true
// delete
delete user["likes birds"];


/*
반드시 모든 표현식의 결과를 프로퍼티 키로 사용할수 있따.
*/

let key = "likes birds";
// user["likes birds"] = true; 와 같습니다.
user[key] = true;

/*
계산된 프로퍼티
객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우
*/

let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {
  [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 온다.
};
alert( bag.apple ); // fruit에 "apple"이 할당되었다면, 5가 출력된다.


/*
단축 프로퍼티

*/

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...등등
    };
  }
  
let user = makeUser("John", 30);
alert(user.name); // John
/*
프로퍼티 이름의 제약사항
변수 이름엔 ‘for’, ‘let’, ‘return’ 같은 예약어를 사용하면 안된다.
그런데 객체 프로퍼티엔 이런 제약이 없다.
*/
// 예약어를 키로 사용해도 괜찮다.
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6

/*
숫자 0을 넣으면 문자열 "0"으로 자동변환된다.
*/

let obj = {
    0: "test" // "0": "test"와 동일합니다.
};

alert( obj["0"] ); // test
alert( obj[0] ); // test (동일한 프로퍼티)

let obj = {};
obj.__proto__ = 5;
alert(obj.__proto__);
// 얘는  안됨

/*
‘in’ 연산자로 프로퍼티 존재 여부 확인하기
자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다
*/
let user = {};
alert( user.noSuchProperty === undefined ); // true는 '프로퍼티가 존재하지 않음'을 의미합니다.

let user = { name: "John", age: 30 };
alert( "age" in user ); // user.age가 존재하므로 true가 출력된다.
alert( "blabla" in user ); // user.blabla는 존재하지 않기 때문에 false가 출력된다.

// 사용할 때 꼭 문자열로 감싸야한다.

for (key in object) {
    // 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행합니다.
}
//아래 예시를 실행하면 객체 user의 모든 프로퍼티가 출력된다.

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // 키
    alert( key );  // name, age, isAdmin
    // 키에 해당하는 값
    alert( user[key] ); // John, 30, true
}

// 함수 Math.trunc는 소수점 아래를 버리고 숫자의 정수부만 반환한다.
alert( String(Math.trunc(Number("49"))) ); // '49' 기존에 입력한 값과 같으므로 정수 프로퍼티
alert( String(Math.trunc(Number("+49"))) ); // '49' 기존에 입력한 값(+49)과 다르므로 정수 프로퍼티가 아님
alert( String(Math.trunc(Number("1.2"))) ); // '1' 기존에 입력한 값(1.2)과 다르므로 정수 프로퍼티가 아님

