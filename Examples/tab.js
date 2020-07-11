window.onload = function(){

    //Dom등록
    var el = document.getElementById("tab1");
    var btns = el.querySelectorAll("ul>li");
    var boxs = el.querySelectorAll("div");

    //이벤트 바인딩
    for(var i=0; i<btns.length; i++){
        btns[i].addEventListener("click",activation);
    }
    
    //tab함수 정의
    function activation(e){
        e.preventDefault();
        var thisID = this.querySelector("a").getAttribute("href");
        thisID = thisID.split("#")[1];
        console.log(thisID);

        for(var i=0; i<boxs.length; i++){
            btns[i].classList.remove("on");
            this.classList.add("on");

            if(boxs[i].getAttribute("id") == thisID){
                boxs[i].classList.add("on");
            }else{
                boxs[i].classList.remove("on");
            }
        }
    }
}