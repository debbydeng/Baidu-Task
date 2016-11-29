window.onload=function(){
    var btn=document.getElementById("start");
    var div=document.getElementsByTagName("div")[0];
    var divList=[];
    var timer=null;

    btn.addEventListener("click",function(event){
        event.preventDefault();
        resetR();
        getColor(div);
        changeColor();
    });
    function resetR(){
        divList=[];
        clearInterval(timer);
        var Div=document.getElementsByTagName("div");
        var len=Div.length;
        for(var i=0;i<len;i++){
            Div[i].style.backgroundColor="white"
        }
    }

    function getColor(node){
        if(node!=null&&node.nodeName.toLowerCase()=="div"){
        divList.push(node);
            getColor(node.firstElementChild);
            getColor(node.nextElementSibling)
        }}
        function changeColor(){
        var i=0; var j=0;
        divList[i].style.backgroundColor="lightGreen";
var checki=document.getElementById("check").value.trim();
        timer=setInterval(function(){
            i++;
            if(i<divList.length){
                divList[i-1].style.backgroundColor="white";
                divList[i].style.backgroundColor="lightGreen";
                var content=divList[i].firstChild.nodeValue.trim();

                if(checki==content){
                    divList[i].style.color="red";
                   j=1;
                }else{

                    divList[i].style.color="black";
                }
            }
            else{
                if(j==0){alert("no matched")}
                clearInterval(timer);
                divList[divList.length-1].style.backgroundColor="white";
            }
        },50);

    }
var btn1=document.getElementById("result");
    btn1.addEventListener("click",function(event){
        event.preventDefault();
        resetR();
        getColor(div);
        changeColor();
    });


        var divs;
        var del=document.getElementById("del");
        var add=document.getElementById("add");
        var selectDiv;

        function Click(){

            divs=document.getElementsByTagName("div");
            for(var i=0;i<divs.length;i++){
                divs[i].onclick=function(event){
                    event.stopPropagation();
                    resetR();
                    this.style.backgroundColor="yellow";
                    selectDiv = this;

                }
            }
        }
Click();

        del.onclick=function(){
            if(selectDiv!=null){selectDiv.remove();selectDiv=null;}
            else{alert("pls choose a content")}
        };

        add.onclick=function(){
            var newdiv=document.createElement("div");
            var content=document.getElementsByTagName("input")[1].value;
            newdiv.appendChild(document.createTextNode(content));
            if(selectDiv!=null){selectDiv.appendChild(newdiv);selectDiv=null;Click();}
            else{alert("pls choose a content")}
        };


};