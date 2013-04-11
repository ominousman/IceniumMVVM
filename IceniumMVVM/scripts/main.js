require.config({
    
    paths : {
        
        jQuery : "libs/jquery.min",
        
        kendo : "libs/kendo.mobile.min"
        
    },
    
    shim: {
        
        jQuery : {
        
            exports: "jQuery"
            
        },
        
        kendo : {
        
            deps: ["jQuery"],
            
            exports: "kendo"
            
        }
        
    
    }
});


var app;

require( ["app/app", "jQuery"], function(application, $) {

    
    $(".log").append('<li>begin app init</li>');
    
    app = application;
    
    app.init();
    
    
    $(".log").append('<li>end app init</li>');

});