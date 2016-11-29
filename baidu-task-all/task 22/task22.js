window.onload=function(){
    var div=document.getElementsByTagName("div")[0];
    var btn=document.getElementById("start");
    var select=document.getElementById("place");
    var divList=[];
    var change=null;

    btn.addEventListener("click",function(event){
        event.preventDefault();
        switch(select.selectedIndex){
            case 0: {resetA();front(div);changeColor();break;}
            case 1:{resetA();middle(div);changeColor();break;}
            case 2:{resetA();backR(div);changeColor();break;}
        }
    });

   function front(node){
       if(node!=null){
           divList.push(node);
           front(node.firstElementChild);
           front(node.lastElementChild);
       }
   }
    function middle(node){
        if(node!=null){
            middle(node.firstElementChild);
            divList.push(node);
            middle(node.lastElementChild)
        }
    }
    function backR(node){
        if(node!=null){
            backR(node.firstElementChild);
            backR(node.lastElementChild);
            divList.push(node);
        }
    }
    function changeColor(){
        var i=0;
        divList[i].style.backgroundColor="yellow";
         change=setInterval(function(){
            i++;
            if(i<divList.length){
                divList[i-1].style.backgroundColor="white";
                divList[i].style.backgroundColor="yellow";
            }else{
                clearInterval(change);
                divList[divList.length-1].style.backgroundColor="white";
            }
            }
          ,500)
    }
    function resetA(){
        divList=[];
        clearInterval(change);
        var Div=document.getElementsByTagName("div");
        var len=Div.length;
        for(var i=0;i<len;i++){
            Div[i].style.backgroundColor="white"
        }
    }
};

