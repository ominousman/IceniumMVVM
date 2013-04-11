define(["kendo", "jQuery"], function(kendo, $){

    return {
    
        init: function(initEvt) {
        
            console.log( 'Home init');

            $(".log").append('<li>init</li>');
            
        },
        
        
        beforeShow: function(beforeShowEvt) {
        
            console.log( 'Home beforeShow');
            
            
            $(".log").append('<li>beforeShow</li>');
        },
        
        show: function() {
        
            console.log( 'Home show');
            
            $(".log").append('<li>show</li>');
        },
        
        viewModel: kendo.observable({
        
            message: "This rocks!"
        
        })
        
    }
    
});