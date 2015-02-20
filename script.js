function addEvents() {
    var labels = document.getElementsByName("front"),
        imgs = document.getElementsByName("back"),
        length = labels.length;
    
    for(i = 0; i<length; i++){
        labels[i].addEventListener("click", clickLabel, false);
        imgs[i].addEventListener("click", clickLabel, false);
    }
}

addEvents();

function clickLabel() {
    
    if(this.getAttribute("data-open") == 0 || this.getAttribute("data-open") == null){
        this.setAttribute("data-open","1");
        this.setAttribute("style","-webkit-transform: rotateX(180deg); box-shadow: none;");
        
        this.parentNode.children[1].setAttribute("data-open","1");
        this.parentNode.children[1].setAttribute("style","-webkit-transform: rotateX(0deg); box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);");
        
    } else {
        this.setAttribute("data-open","0");
        this.setAttribute("style","-webkit-transform: rotateX(-180deg); box-shadow: none;");
        
        this.parentNode.children[0].setAttribute("data-open","0");
        this.parentNode.children[0].setAttribute("style","-webkit-transform: rotateX(0deg); box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);");
        
    }
}