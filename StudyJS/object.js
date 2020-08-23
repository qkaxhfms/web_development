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