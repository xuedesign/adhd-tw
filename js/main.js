//進行設定
require.config({
    
    // 定義路徑別名
    paths: {
        //jQuery總碼
        "jquery": "https://code.jquery.com/jquery.min",
        //漢字標準格式 https://css.hanzi.co/manual/
　　　　　"hanzi": "https://cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min",
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
        'hanzi', 
        'lazyload', 
        'wow'], 
    function (
        $, 
        hanzi,
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
　　
});