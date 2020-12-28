// method
let user = {
    name: "John",
    age: 30
}

user.sayHi = function(){
    console.log("안녕하세요");
}

user.sayHi(); // 안녕하세요

/*
객체 프로퍼티에 할당된 함수 -> 메서드
*/

let user = {
    // ...
}

//함수 선언
function sayHi(){
    console.log("안녕하세요");
}

//선언된 함수를 메서드로 등록
user.sayHi = sayHi;

user.sayHi();//안녕하세요!

/*
객체를 사용해서 개체를 표현하는 방식을 객체 지향 프로그래밍이라고 합니다.
*/

let user = {
    name: "John",
    age: 30,

    sayHi(){
        //this는 현재 객체를 나타냅니다.
        console.log(this.name);
    }
}

user.sayHi(); //John

// this
this 값은 런타임에 결정됩니다.
/*
함수를 선언할 때 this를 사용할 수 있습니다.
다만, 함수가 호출되기 전까지 this엔 값이 할당되지 않습니다.
함수를 복사해 객체 간 전달할 수 있습니다.
함수를 객체 프로퍼티에 저장해 object.method()같이 ‘메서드’ 형태로 호출하면 this는 object를 참조합니다.
*/

/* this가 없는 화살표함수 */

let user = {
    firstName: "보라",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
  
user.sayHi(); // 보라