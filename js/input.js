(function ($) {

    function initialize_field($el) {

        //$('.field_type-multi-taxonomy-chooser .select2-container-disabled').remove();
        
        //Have to explictily select this ACF field instead of the general "select" element such as above.
        
        
        //var select_list_id = $('.js-multi-taxonomy-select2').attr('id')
        //console.log(select_list_id);
        
        //$("#" + select_list_id).select2();
       
        //$el.doStuff();

    }
    

    if (typeof acf.add_action !== 'undefined') {

        /*
         *  ready append (ACF5)
         *
         *  These are 2 events which are fired during the page load
         *  ready = on page load similar to $(document).ready()
         *  append = on new DOM elements appended via repeater field
         *
         *  @type	event
         *  @date	20/07/13
         *
         *  @param	$el (jQuery selection) the jQuery element which contains the ACF fields
         *  @return	n/a
         */

        acf.add_action('ready append', function ($el) {

            //$("select.js-multi-taxonomy-select2").select2();

            // search $el for fields of type 'multi-taxonomy-chooser'
            acf.get_fields({type: 'multi-taxonomy-chooser'}, $el).each(function () {
                initialize_field($(this));
            });

        });


    } else {

        /*
         *  acf/setup_fields (ACF4)
         *
         *  This event is triggered when ACF adds any new elements to the DOM. 
         *
         *  @type	function
         *  @since	1.0.0
         *  @date	01/01/12
         *
         *  @param	event		e: an event object. This can be ignored
         *  @param	Element		postbox: An element which contains the new HTML
         *
         *  @return	n/a
         */

        $(document).live('acf/setup_fields', function (e, postbox) {

            $(postbox).find('.field[data-field_type="multi-taxonomy-chooser"]').each(function () {

                initialize_field($(this));

            });

        });


    }


})(jQuery);