// 조건부 삼항 연산자
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

{
    const isDone = true;
    {
        let compoent;
        if(isDone){
            compoent = '개';
        }else{
            component = '고양이';
        }
        console.log(component);
    }
    {
        const component = isDone ? "개" : "고양이";
        console.log(component);
    }
}