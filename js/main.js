require.config({
    paths: {
        //jQuery總碼
        "jquery": "https://code.jquery.com/jquery.min",
        //漢字標準格式 https://css.hanzi.co/manual/
　　　　　"hanzi": "https://cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min",
　　　　　//圖片延遲載入
        "lazyload": "https://cdn.jsdelivr.net/npm/lazyload@2.0.0-beta.2/lazyload.min",
        //物件載入動畫
        "wow": "lib/wow.min",
    }
});

require(['jquery', 'hanzi','lazyload', 'wow'], function ($, hanzi, lazyload, wow){
    // 另開視窗
    function externalLinks() { 
     if (!document.getElementsByTagName) return; 
     var anchors = document.getElementsByTagName("a"); 
     for (var i=0; i<anchors.length; i++) { 
       var anchor = anchors[i]; 
       if (anchor.getAttribute("href") && 
           anchor.getAttribute("rel") == "external") 
         anchor.target = "_blank"; 
     } 
    } 
    window.onload = externalLinks;

    //圖片延遲載入 #20180205更新2.0
    $("img.lazyload").lazyload();

    //wow動畫
    wow=new WOW({animateClass:"animated",offset:100,callback:function(a){console.log("WOW: animating <"+a.tagName.toLowerCase()+">")}}),wow.init();
　　
});