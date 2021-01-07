// map
let arr = [1,2,3,4,5];
let arr1 = arr.map((idx,val)=>{
    return val + 5;
})
// map에서 return을 주지 않으면 해당 index는 undefined로 초기화된다.

console.log(arr);
console.log(arr1);