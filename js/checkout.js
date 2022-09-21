$("#subscribe-form").on('submit', function(e) {
    // form validation
    formValidationCheck(this);
    if(!$(this).valid()){
        return false;
    }
    // Disable the submit button to prevent repeated clicks and form submit
    $('.submit-button').attr("disabled", "disabled");
    // createToken returns immediately - the supplied callback 
    // submits the form if there are no errors
    Stripe.createToken({
        number: $('.card-number').val(),
        cvc: $('.card-cvc').val(),
        exp_month: $('.card-expiry-month').val(),
        exp_year: $('.card-expiry-year').val()
    }, stripeResponseHandler);
    return false; // submit from callback
});



// Call back function for stripe response.
function stripeResponseHandler(status, response) {
    if (response.error) {
        // Re-enable the submit button
        $('.submit-button').removeAttr("disabled");
        // Show the errors on the form
        stripeErrorDisplayHandler(response);
        $('.subscribe_process').hide();
    } else {
        var form = $("#subscribe-form");
        // Getting token from the response json.
        var token = response['id'];
        // insert the token into the form so it gets submitted to the server
        if ($("input[name='stripeToken']").length == 1) {
            $("input[name='stripeToken']").val(token);
        } else {
            form.append("<input type='hidden' name='stripeToken' value='" + token + "' />");
        }
        var options = {
            // post-submit callback when error returns
            error: subscribeErrorHandler, 
            // post-submit callback when success returns
            success: subscribeResponseHandler, 
            complete: function() {
                $('.subscribe_process').hide()
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json'
        };
        // Doing AJAX form submit to your server.
        form.ajaxSubmit(options);
        return false;
    }
}