define(["kendo"], function(kendo){

    return {
    
        init: function(initEvt) {
        
            console.log( 'Home init');
            
        },
        
        
        beforeShow: function(beforeShowEvt) {
        
            console.log( 'Home beforeShow');
            
        },
        
        show: function() {
        
            console.log( 'Home show');
            
        },
        
        viewModel: kendo.observable({
        
            message: "This rocks!"
        
        })
        
    }
    
});