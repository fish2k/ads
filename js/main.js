jQuery(function ($) {

  $(document).ready(function () {

    $(document).on('input', '.owe-value', function () {
      $('#owe').html('$' + $(this).val());
      
      // продолжай писать тута :)
    });

  });

});