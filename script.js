function addEvents() {
    var labels = document.getElementsByName("label"),
        length = labels.length;
    
    for(i = 0; i<length; i++){
        labels[i].addEventListener("click", clickLabel, false);
    }
}

addEvents();

function clickLabel() {
    
    if(this.getAttribute("data-open") == 0 || this.getAttribute("data-open") == null){
        this.setAttribute("data-open","1");
        this.setAttribute("style","-webkit-transform: translateX(90%);");
        this.children[0].setAttribute("style","-webkit-transform: rotate(180deg);")
        this.children[1].style.opacity = "0";
    } else {
        this.setAttribute("data-open","0");
        this.setAttribute("style","");
        this.children[0].setAttribute("style","");
        this.children[1].style.opacity = "1";
    }
}