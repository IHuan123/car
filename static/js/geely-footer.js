//footer
(function(){
    var $ups=document.querySelectorAll(".footer-up");
    var footerCosle=document.querySelectorAll(".footer-cosle");
    var $footer_option=$(".footer-option")
    var $html=document.documentElement;
    var i=0;
    
    $(window).resize(function() {
        var heights = $(window).height();
        var widths = $(window).width();
    for(var up of $ups){
        if(widths<=991){
            $footer_option.css("display","none");
            up.onclick=function(){
                this.nextElementSibling.style.display="block";
                }
            }else if(widths>991){
                $footer_option.css("display","block");
            }
    }

    for(var dow of footerCosle){
        if(widths<=991){
        dow.onclick=function(){
                this.parentElement.style.display="none";
            }
        }
    }
})       
})();