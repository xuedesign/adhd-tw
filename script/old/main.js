//進行設定
require.config({
    
    // 定義路徑別名
    paths: {
        //jQuery總碼
        "jquery": "https://code.jquery.com/jquery.min",
        //Banner輪播
        "slider": "https://cdn.jsdelivr.net/npm/swiper@4.3.3/dist/js/swiper.min",
　　　　　//圖片延遲載入
        "lazyload": "https://cdn.jsdelivr.net/npm/lazyload@1.8.4/jquery.lazyload.min",
        //物件載入動畫
        "wow": "https://cdn.rawgit.com/graingert/WOW/34712a3d/dist/wow.min"},
    
    // 配置依賴性
    shim: {
        'lazyload' : {
            deps: ['jquery']
        },
    }
    
});

require([
        'jquery',
        'slider',
        'lazyload', 
        'wow'], 
    function (
        $, 
        slider,
        wow, 
        lazyload, 
        ){
        
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
    new WOW().init();
    //wow=new WOW({animateClass:"animated",offset:100,callback:function(a){console.log("WOW: animating <"+a.tagName.toLowerCase()+">")}}),wow.init();
    
    //Banner輪播
     var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
　　
});