window.onload = ()=>{
    const tab1 = new Tab('#tab1');
}

class Tab {
    constructor(selector){
        this.initDOM(selector);
        this.bindingEvent();
    }

    initDOM(selector){
        this.el = document.querySelector(selector);
        this.btns = this.el.querySelectorAll('ul>li');
        this.boxs = this.el.querySelectorAll('div');
    }

    bindingEvent(){
        let self = this;
        for(let i=0; i<self.btns.length; i++){
            self.btns[i].addEventListener('click',function(e){
                e.preventDefault();
                self.activation(i);
            })
        }
    }

    activation(index){
        for(var k=0; k<this.boxs.length; k++){
            this.btns[k].classList.remove('on');
            this.btns[index].classList.add('on');

            this.boxs[k].classList.remove('on');
            this.boxs[index].classList.add('on');
        }
    }
}