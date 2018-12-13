$(function(){
    var LB=document.getElementsByClassName("el-carousel__container")[0];
    var stylelist=document.styleSheets;
    // console.log(stylelist)
    // var i=stylelist.length;
    // var a=document.styleSheets[i-1]//获取外部css文件属性
    // var b=a.rules[1353];
    // console.log(b)
    var winWidth=window.innerWidth;  //获取窗口宽度
    // LB.style.blockSize=`${winWidth*0.33}px`;//设置轮播响应式尺寸变化
    // b.style.height=`${winWidth*0.33}px`;


    function changecss(theClass, element, value) {
        var cssRules;
        if (document.all) {
            cssRules = 'rules';
        }
        else if (document.getElementById) {
            cssRules = 'cssRules';
        }
        for (var S = 0; S < document.styleSheets.length; S++) {
            for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
                if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
                    document.styleSheets[S][cssRules][R].style[element] = value;
                }
            }
        }
    }
    changecss('.el-carousel__container','height',`${winWidth*0.33}px`)
    // function getCurrentStyle(node) {
    //     var style = null;
    //     console.log(123)
    //     if(window.getComputedStyle) {
    //         style = window.getComputedStyle(node, null);
    //     }else{
    //         style=node.currentStyle.height;
    //     }
    //      return style  //能获取这个值 但不能修改
    // }
    // getCurrentStyle(LB)



// function addRule(num, selector, selectorText, position){
//     //获取要操作的link标签对象
//     var sheet = document.styleSheets[num];
//     if (typeof sheet.insertRule != 'undefined'){//w3c
//         sheet.insertRule(selector + '{' + selectorText + '}', position);
//     }else if (typeof sheet.addRule != 'undefined'){//ie
//         sheet.addRule(selector, selectorText, position)
//     }
// }



// console.log(document.defaultView.getComputedStyle (LB,null)["height"])

//     function GetCurrentStyle (obj, prop) {
//         if(obj.currentStyle){
//             return obj.currentStyle[prop];
//         }
//         else if(window.getComputedStyle){
//             console.log(window.getComputedStyle)
//             propprop = prop.replace (/([A-Z])/g, "-$1");           
//             propprop = prop.toLowerCase ();     
//             return document.defaultView.getComputedStyle (obj,null)[prop];
//         }
//         return null;
//     }
//     console.log(GetCurrentStyle(LB,"height"))
  var html=document.documentElement;
  html.style.fontSize=html.clientWidth/120+"px" ;//设置根像素
    window.onresize = function(){
    var winWidth=window.innerWidth;      
    // LB.style.blockSize=`${winWidth*0.33}px`;
    // b.style.height=`${winWidth*0.33}px`;    
    html.style.fontSize=html.clientWidth/120+"px" //设置在缩放时的根像素
    changecss('.el-carousel__container','height',`${winWidth*0.33}px`)
    }
}) 


//车型列表左右切换
