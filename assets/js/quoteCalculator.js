$(function () {
    $("#quoteForm input,#quoteForm select").jqBootstrapValidation({
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            // get values from FORM
            var boilercost = $("select#boilerBrand").find(':selected').data('cost');
            var hotWaterCylinderCost = $("select#hotWaterCylinder").find(':selected').data('cost');

            // Success message
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success')
                .append(`Estimated cost: <Strong>\£${boilercost + hotWaterCylinderCost}</String>`);
            $('#success > .alert-success')
                .append('</div>');
            $('#quoteForm').trigger("reset");
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });
});
