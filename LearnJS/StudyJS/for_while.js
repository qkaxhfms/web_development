window.onload = () => {
    // while
    // while (condition) {
    //      코드
    //      '반복문 본문(body)'이라 불림
    //   }
    /*
    반복문이 한번 실행되는 것을 반복이라고 부릅니다.
    반복문 조건엔 비교뿐만 아니라 모든 종류의 표현식, 변수가 올 수 있습니다.
    조건은 while에 의해 평가되고, 평가 후엔 불린값으로 변경됩니다.
    */

    //예제 1
    let i = 0;
    while (i < 3) { // 0, 1, 2가 출력됩니다.
        console.log( i );
        i++;
    }

    //예제 2
    let j = 3;
        while (j) { // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춥니다.
        console.log( j );
        j--;
    }
    //예제 2랑 같은 축약형
    let k = 3;
    while (k) alert(k--);

}