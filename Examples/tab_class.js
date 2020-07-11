window.onload = function(){
    var tab1 = new Tab('#tab1');
}

class Tab {
    constructor(selector){
        this.initDOM(selector);
        this.bindingEvent();
    }

    initDOM(selector){
        this.el = document.getElementById('tab1');
        this.btns = this.el.querySelectorAll('ul>li');
        this.boxs = this.el.querySelectorAll('div');
    }

    bindingEvent(){
        var self = this;
        for(var i=0; i<self.btns.length; i++){
            self.btns[i].addEventListener('click',function(e){
                e.preventDefault();
                self.activation(this);
            });
        }
    }

    activation(item){
        var thisID = item.querySelector('a').getAttribute('href');
        thisID = thisID.split('#')[1];
        console.log(thisID);

        //버튼활성화
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
}