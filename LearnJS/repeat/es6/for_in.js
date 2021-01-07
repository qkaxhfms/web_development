// for_in
const obj = { a: 1, b: 2, c: 3 };

for(const prop in obj){
    console.log(`${prop}: ${obj[prop]}`);
    console.log(obj[prop]);
    console.log(obj);
}