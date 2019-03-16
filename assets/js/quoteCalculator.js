$(function () {
    $("#quoteForm input,#quoteForm select").jqBootstrapValidation({
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            // get values from FORM
            var selectedBoiler = $("select#boilerBrand").find(':selected').val();
            var boilercost = $("select#boilerBrand").find(':selected').data('cost');
            var hotWaterCylinderCost = $("select#hotWaterCylinder").find(':selected').data('cost');

            $("#boilerImage").attr("src",`assets/img/boiler-${selectedBoiler}.jpg`);
            $('#your-quote').show(100);
            
            // Success message
            $('#priceWrapper').html("<div class='price'>");
            $('#priceWrapper > .price')
                .append(`<div>Estimated cost</div>`);
                $('#priceWrapper > .price')
                .append(`<h2>\£${boilercost + hotWaterCylinderCost}</h2>`);
            $('#priceWrapper > .price')
                .append('</div>');
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });
});
