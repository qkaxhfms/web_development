//forEach
const arr = [0,1,2,3,4,5,6,7,8,9,10];
const obj1 = {name:"kim"};
const obj2 = {name:"park"};

// 기본적인 forEach
// arr.forEach(function(element){
//     console.log(element);
// });

// 홀수 배열 만들어보기

// let oddArray = [];
// arr.forEach(function(element){
//     console.log(element)
//     if(element%2==1){
//         oddArray.push(element);
//     }
// });

// arr.forEach(function(element, index, array){
//     console.log(`${array}의 ${index}번째 요소 : ${element}`);
// })

// console.log(oddArray);

arr.forEach(function(element){
    console.log(`${this.name} - ${element}`);
}, obj1)

// 대상.forEach(function(처리할요소, 요소의인덱스, forEach를 호출한 배열){

// })

    