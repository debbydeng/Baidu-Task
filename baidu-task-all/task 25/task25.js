window.onload=function() {
    var hidden;
    var show;
    var liList=document.getElementsByTagName("li"),content;

    function hideIt() {
        hidden = document.getElementsByClassName("down-arrow");
        for (var i = 0; i < hidden.length; i++) {
            hidden[i].onclick = function (event) {
                event.stopPropagation();
                this.className = "right-arrow";
                this.firstElementChild.style.display = "none";
                showIt();
            }
        }
    }
    hideIt();

    function showIt() {
        show = document.getElementsByClassName("right-arrow");
        for (var i = 0; i < show.length; i++) {
            show[i].onclick= function (event) {
                event.stopPropagation();
                this.className = "down-arrow";
                this.firstElementChild.style.display = "block";
                hideIt();
            };
        }
    }
    showIt();

    var btn1=document.getElementById("btn1");
    var btn2=document.getElementById("btn2");
    var save=[];
    btn1.onclick=checkIt;
    btn2.onclick=delIt;

    function checkIt(event){
        event.stopPropagation();
        resetColor();var j=0;
        content=document.getElementById("inquire").value.trim();
        for(var i=0;i<liList.length;i++){
            var re=new RegExp(content,"gi");
            var liContent=liList[i].firstChild.nodeValue.trim();
            if(re.test(liContent)){
                liList[i].style.color="red";
                save.push(liList[i]);
                if(liList[i].firstElementChild!=null){
                    liList[i].firstElementChild.style.color="dodgerblue";
                }
                if(liList[i].parentNode.parentNode!=null&&liList[i].parentNode.parentNode.className=="right-arrow"){
                    liList[i].parentNode.style.display = "block";
                    liList[i].parentNode.parentNode.parentNode.style.display = "block";
                }
                j+=1;
            }
        }
        if(j==0){alert("no matched")}
    }
    function resetColor(){
        for(var i=0;i<liList.length;i++){
            liList[i].style.color="dodgerblue";
        }
    }

    function delIt(){
        for(var i=0;i<save.length;i++){
            save[i].style.color="dodgerblue";}
    }

    

};