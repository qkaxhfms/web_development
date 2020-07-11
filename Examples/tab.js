window.onload = function(){

    //DOM등록
    var el = document.getElementById('tab1');
    var btns = el.querySelectorAll('ul>li');
    var boxs = el.querySelectorAll('div');

    //이벤트 연결
    for(var i=0; i<btns.length; i++){
        btns[i].addEventListener('click',activateBox);
    } 

    //함수정의
    function activateBox(e){
        e.preventDefault();

        //href값 문자열에서 '#'제거
        var thisID = this.querySelector('a').getAttribute('href');
        thisID = thisID.split('#')[1];
        
        
        for(var i=0; i<boxs.length; i++){
            //이벤트 발생시 다시 박스의 갯수만큼 반복을 돌면서 버튼 활성화
            btns[i].classList.remove('on');
            this.classList.add('on');

            //클릭한 버튼의 ID값과 현재 반복을 돌고 있는 ID값을 비교해서 활성화
            if(boxs[i].getAttribute('id') == thisID){
                boxs[i].classList.add('on');
            }else{
                boxs[i].classList.remove('on');
            }
        }
    }
}