define(["jQuery", "kendo", "app/views/home"], function($, kendo, homeView){

    var _kendoApplication;
    
    return {
    
        init : function() {
        
            _kendoApplication = new kendo.mobile.Application( document.body, { transition: "slide" });
        
        },
        
        views: {
        
            home: homeView
        
        }
    
    }
    

});