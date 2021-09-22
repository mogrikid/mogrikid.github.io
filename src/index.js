$(document).ready(function () {

    var $form = $('form#RSVP-Form'),
        url = 'https://script.google.com/macros/s/AKfycbxntRxdE2whrTc5BnMKJ09qb-ueHgtXe3-bPGeit4DsAqsSOoEAJ3F8WNNQAFynB_8OoQ/exec'

    $("#request-rsvp").on("click", function (e) {
        $("#invitationPage").fadeOut(function (e) {
            document.location.href = "#top";
            $("#form-container").fadeIn();
        });
    })
    $('#RSVP-submit').on('click', function (e) {
        e.preventDefault();
        if ($("#nameInput").val() == "") {
            $("#nameInput").addClass("is-invalid");
        } else {
            $("#nameInput").removeClass("is-invalid");
        }
        if ($("#phoneInput").val() == "") {
            $("#phoneInput").addClass("is-invalid");
        } else {
            $("#phoneInput").removeClass("is-invalid");
        }
        if ($("#amountInput").val() == "") {
            $("#amountInput").addClass("is-invalid");
        } else {
            $("#amountInput").removeClass("is-invalid");
        }
        if ($("#invitatorInput").val() == "") {
            $("#invitatorInput").addClass("is-invalid");
        } else {
            $("#invitatorInput").removeClass("is-invalid");
        }

        if ($("#nameInput").val() != "" && $("#phoneInput").val() != "" && $("#amountInput").val() != "" && $("#invitatorInput").val() != "") {
            $("#form-container").fadeOut(function (e) {
                $("#spinner").fadeIn();
            });
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
                success: function (e) {
                    $("#spinner").fadeOut(function (e) {
                        $("#thankYouContainer").fadeIn();
                    });
                },
                error: function (e) {
                    $("#thankYouContainer").fadeOut(function (e) {
                        $("#errorContainer").fadeIn();
                    });

                },
                data: $form.serializeObject()
            })
        }
    })
});


$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || "");
        } else {
            o[this.name] = this.value || "";
        }
    });
    return o;
};
