/**
 * Created by ZTHK10 on 2016/9/10.
 */
$(function(){
    var waterfall=new Waterfall({
        containerSelector:'.water-fall',
        boxSelector:'.waterfallBox',
        column:4
    });
    buttonEvent();
    displayImage();
    loadMore();

    function buttonEvent(){
        var $header=$('header');
        $header.click(function(event){
            switch(event.target.id){
                case 'addColumn':
                    waterfall.column++;
                    waterfall.compose(true);
                    break;
                case 'delColumn':
                    waterfall.column--;
                    waterfall.compose(true);
                    break;
                case 'addBox':
                    waterfall.addBox(newNode()());
                    waterfall.boxes.push(newNode()());
                    break;
            }
        })
    }

    function loadMore(){
        $('.waterfall').click(function(event){
            if(event.target.tagName==='IMG'){
                var $display=$('.display');
                var $img=$('.display img');
                $img.attr('src',event.target.getAttribute('src'));
                $display.attr("class","display");
                $display.click(function(){
                    $display.attr("class","hidden"); 
                })
            }
        })
    }

    function newNode(){
        var size=['660x250', '300x400', '350x500', '200x320', '300x300'];
        var color=['E97452', '4C6EB4', '449F93', 'D25064', 'E59649'];
        var i=parseInt(Math.random()*5);

        return function(){
            var $box="<div class='waterfallBox'>"+"<image src='http://placehold.it/"+size[i]+"/"+color[i]+"/fff'/>" +
                "<div class='content'><h3>Heading</h3><p>Content</p></div>"+"</div>";

            return $box;
        }
    }
});