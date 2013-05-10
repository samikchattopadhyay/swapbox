(function($) {
    $.fn.swapbox = function( ) {
        return this.each(function() {
            var id = $(this).attr('id');
            var source = $('#' + id + '-source');
            var target = $('#' + id + '-target');

            //send all
            $(this).on('click', '.send-all', function() {
                $('option', source).appendTo(target);
                if (window.chrome == undefined) {
                    $('option', target).prop('selected', true); // select all in target
                    $('option', source).removeProp('selected'); // deselect all insource
                } else {
                    $('option', target).attr('selected', true); // select all in target
                    $('option', source).removeAttr('selected'); // deselect all insource
                }
            });
            //send selected
            $(this).on('click', '.send-selected', function() {
                $('option:selected', source).appendTo(target);
                if (window.chrome == undefined) {
                    $('option', target).prop('selected', true); // select all in target
                    $('option', source).removeProp('selected'); // deselect all insource
                } else {
                    $('option', target).attr('selected', true); // select all in target
                    $('option', source).removeAttr('selected'); // deselect all insource
                }
            });
            //get all
            $(this).on('click', '.get-all', function() {
                $('option', target).appendTo(source);
                if (window.chrome == undefined) {
                    $('option', source).removeProp('selected'); // deselect all insource
                } else {
                    $('option', source).removeAttr('selected'); // deselect all insource
                }
            });
            //get selected
            $(this).on('click', '.get-selected', function() {
                $('option:selected', target).appendTo(source);
                if (window.chrome == undefined) {
                    $('option', target).prop('selected', true); // select all in target
                    $('option', source).removeProp('selected'); // deselect all insource
                } else {
                    $('option', target).attr('selected', true); // select all in target
                    $('option', source).removeAttr('selected'); // deselect all insource
                }

            });

            $('div').on('click', '.fbtn_big', function(e) {
                if (window.chrome == undefined) {
                    $('option', target).prop('selected', true);
                } else {
                    $('option', target).attr('selected', true);
                }

            });
        });
    };
})(jQuery);