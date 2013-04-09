(function( $ ){
    $.fn.swapbox = function( ) {  
        return this.each(function() {        
            var id = $(this).attr('id');
            var source = $('#'+id+'-source');
            var target = $('#'+id+'-target');
            //send all
            $(this).on('click','.send-all',function(){
                $( 'option', source ).appendTo(target);
            });
            //send selected
            $(this).on('click','.send-selected',function(){
                $( 'option:selected', source ).appendTo(target);
            });
            //get all
            $(this).on('click','.get-all',function(){
                $( 'option', target ).appendTo(source);
            });
            //get selected
            $(this).on('click','.get-selected',function(){
                $( 'option:selected', target ).appendTo(source);
            });
                
            $('body').on('submit','form',function(e){
                $('option',target).attr('selected',true);
            });
        });

    };
})( jQuery );