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