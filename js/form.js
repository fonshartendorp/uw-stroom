// Set form type such that form handler knows what to do.
var type;

function setType(formType) {
    type = formType;
}

$(document).ready(function() {
    var delay = 1000;

    // When one of the submit buttons has been clicked, handle the form.
    $('.btn-form').click(function(e) {
        e.preventDefault();

        // Differs between the offerte or contact form.
        if (type == 'offerte') {
            var telefoon = $('#telefoon-offerte').val();
            var bedrijf = $('#bedrijf-offerte').val();
            var pakket = $('#pakket-offerte').val();
        } else {
            var telefoon = '';
            var bedrijf = '';
            var pakket = '';
        }

        // Validate input fields.
        var name = $('#name-' + type).val();
        if (name == '') {
            $('.message_box-' + type).html(
                '<span style="color:red;">Uw naam is verplicht.</span>'
            );
            $('#name-' + type).focus();
            return false;
        }

        var email = $('#email-' + type).val();
        if (email == '') {
            $('.message_box-' + type).html(
                '<span style="color:red;">Vul een emailadres in.</span>'
            );
            $('#email-' + type).focus();
            return false;
        }
        if ($("#email").val() != '') {
            if (!isValidEmailAddress($("#email-" + type).val())) {
                $('.message_box-' + type).html(
                    '<span style="color:red;">Emailadres incorrect.</span>'
                );
                $('#email-' + type).focus();
                return false;
            }
        }

        var message = $('#message-' + type).val();
        if (message == '') {
            $('.message_box-' + type).html(
                '<span style="color:red;">Vul hier uw bericht in!</span>'
            );
            $('#message-' + type).focus();
            return false;
        }

        // Send form input to AJAX script.
        $.ajax({
            type: "POST",
            url: "ajax.php",
            data: "name=" + name + "&email=" + email + "&telefoon=" + telefoon + "&bedrijf=" + bedrijf + "&pakket=" + pakket + "&message=" + message,

            beforeSend: function() {
                $('.message_box-' + type).html(
                    '<img src="images/loader.gif" width="25" height="25"/>'
                );
            },
            success: function(data) {
                setTimeout(function() {
                    $('.message_box-' + type).html(data);
                }, delay);
            }
        });

        name = '';
        email = '';
        message = '';

    });

});

//Email Validation Function
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};
