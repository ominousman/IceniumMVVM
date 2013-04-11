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