// Garbage collection
/*
자바스크립트는 눈에 보이지 않는 곳에서 메모리 관리를 수행
*/

let user = {
    name: "John"
};

let admin = user;

user = null;
admin = null;

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
        father: man,
        mother: woman
    }
}
  
let family = marry({
    name: "John"
}, {
    name: "Ann"
});

delete family.father;
delete family.mother.husband;