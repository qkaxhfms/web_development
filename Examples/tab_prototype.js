/*
    1.생성자 함수로 인스턴스 생성 (필요한 정보값을 인수로 전달:선택자)
    2.생성자 함수 정의함과 동시에 필수 메서드 2개 호출(initDOM, bindingEvent)
    3.생성자 함수의 prototype에 해당 메서드 등록
    4.필요한 메서들은 그때 그때 추가해서 prototype에 등록해서 사용

    addEventListner로 이벤트 연결시 주의점
    1. 익명함수로 감싸로 외부 함수 호출시 해당 외부함에서의 this는 인스턴스를 지칭
    2. 바로 외부함수이름을 인수로 넣어서 호출시 외부함수에서의 this는 이벤트가 발생한 주체를 지칭
*/
window.onload = function(){
    var tab1 = new Tab('#tab1');
}

function Tab(selector){
    this.initDOM(selector);
    this.bindingEvent();
}

Tab.prototype.initDOM= function(selector){
    this.el = document.querySelector(selector);
    this.btns = this.el.querySelectorAll('ul>li');
    this.boxs = this.el.querySelectorAll('div');
}

Tab.prototype.bindingEvent= function(){
    var self = this;
    for(var i=0; i<this.btns.length; i++){
        
        this.btns[i].addEventListener('click',function(e){
            e.preventDefault();
            self.activateBox(this);
        });       

        //this.btns[i].addEventListener('click',this.activateBox);
    }
}

Tab.prototype.activateBox = function(item){  
    console.log(this);
    
    var thisID = item.querySelector('a').getAttribute('href');
    thisID = thisID.split('#')[1];  
    
    
    for(var i=0; i<this.boxs.length; i++){
        this.btns[i].classList.remove('on');
        item.classList.add('on');

        if(this.boxs[i].getAttribute('id') == thisID){
            this.boxs[i].classList.add('on');
        }else{
            this.boxs[i].classList.remove('on');
        }
    } 

    
      
}