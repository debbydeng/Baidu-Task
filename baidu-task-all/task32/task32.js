/**
 * Created by ZTHK10 on 2016/7/18.
 */
function SheetCreator(name,type,func,rules){
    this.label=name;
    this.type=type;
    this.validator=func;
    this.rules=rules;
}
var tipMessageArr = ["名称不能为空", "输入有误", "输入正确"];

var check={
    name:function(str){
        if(str==""){return tipMessageArr[0] }
        else if(/[\u4E00-\u9FA5A-Za-z0-9_]{4,16}/g.test(str)){return tipMessageArr[2]}
        else{return tipMessageArr[1]}
    },
    code:function(str){
        if(str==""){return tipMessageArr[0] }
        else if(/[A-Za-z0-9_]{4,16}/g.test(str)){
            return tipMessageArr[2]
        }
        else{return tipMessageArr[1]}
    }


};
var nameSheet=new SheetCreator("name","radio",check.name,"必填，长度为4~16个字符，只允许输入中文、英文字母和数字");

var sheet=document.getElementById("sheet");
var btn1=document.getElementById("create");
//添加表单
function produceForm(){

}
btn1.addEventListener("click",function(event){
    event.stopPropagation();
    produceForm();
});
