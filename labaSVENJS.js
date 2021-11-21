let tttt = null;
kv.onclick= function(){
    var gg = document.forms["oopa"]["number"].value;
    for (var i=0;i<gg;i++){
    var newdiv = document.createElement('div');
    newdiv.className = "KVAD";
    newdiv.onclick = function(){

        if (tttt == this) {
            this.remove();
        }
        else{
            if (tttt != null){tttt.style.background = "";
            tttt.style.borderBottomColor = "";}
            this.style.background = "rgba(255,255,0,0.9)" ;
        tttt = this;}
    }
    
    var aba = new Number(getRandomInt2(10,100));
    var bab = new Number(getRandomPos(0, 600));
    var aaa = new Number(getRandomPos(0, 300));
    newdiv.style.width = aba+"px";
    newdiv.style.height = aba+"px";
    newdiv.style.left = bab+"px";
    newdiv.style.top = aaa+70+"px";
    document.body.append(newdiv);}
    
    
}
tr.onclick=function(){
    var gg = document.forms["oopa"]["number"].value;
    for (var i=0;i<gg;i++){
    var newdiv = document.createElement('div');
    newdiv.className = "TRIG";
    newdiv.onclick = function(){

        if (tttt == this) {
            this.remove();
        }
        else{
            if (tttt != null){tttt.style.borderBottomColor = "";tttt.style.background = ""}
            this.style.borderBottomColor = "rgba(255,255,0,0.9)"  ;
        tttt = this;}
    }
    var bab = new Number(getRandomPos(0, 600));
    var aaa = new Number(getRandomPos(0, 300));
    newdiv.style.left = bab+"px";
    newdiv.style.top = aaa+70+"px";
    document.body.append(newdiv);}
}
kr.onclick=function(){
    var gg = document.forms["oopa"]["number"].value;
    for (var i=0;i<gg;i++){
    var newdiv = document.createElement('div');
    newdiv.className = "KRUG";
    newdiv.onclick = function(){

        if (tttt == this) {
            this.remove();
        }
        else{
            if (tttt != null){tttt.style.background = "";
            tttt.style.borderBottomColor = "";}
            this.style.background = "rgba(255,255,0,0.9)" ;
        tttt = this;}
    }
    var aba = new Number(getRandomInt2(10,100));
    var bab = new Number(getRandomPos(0, 600));
    var aaa = new Number(getRandomPos(0, 300));
    newdiv.style.width = aba+"px";
    newdiv.style.height = aba+"px";
    newdiv.style.left = bab+"px";
    newdiv.style.top = aaa+70+"px";
    
    document.body.append(newdiv);} 
}
function getRandomPos(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  

