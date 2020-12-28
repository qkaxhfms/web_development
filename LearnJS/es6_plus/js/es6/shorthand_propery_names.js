// shorthand propery namer
// 객체 초기자 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer

{
    const ms1 = {
        name:'ms',
        age:'28',
    }

    const name = 'ms';
    const age = '28';

    const ms2 = {
        name:name,
        age:age,
    }

    const ms3 = {
        name,
        age
    }
    console.log(ms1,ms2,ms3);
}