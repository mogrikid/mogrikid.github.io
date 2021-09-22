//ID: AKfycbxntRxdE2whrTc5BnMKJ09qb-ueHgtXe3-bPGeit4DsAqsSOoEAJ3F8WNNQAFynB_8OoQ
//URL: https://script.google.com/macros/s/AKfycbxntRxdE2whrTc5BnMKJ09qb-ueHgtXe3-bPGeit4DsAqsSOoEAJ3F8WNNQAFynB_8OoQ/exec

$(document).ready(function () {

    var $form = $('form#RSVP-Form'),
        url = 'https://script.google.com/macros/s/AKfycbxntRxdE2whrTc5BnMKJ09qb-ueHgtXe3-bPGeit4DsAqsSOoEAJ3F8WNNQAFynB_8OoQ/exec'

    $("#request-rsvp").on("click", function (e) {
        $("#invitationPage").fadeOut(function (e) {
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

        if($("#amountInput").val() != "" && $("#phoneInput").val() != "" && $("#amountInput").val() != "" && $("#invitatorInput").val() == ""){
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            success: function (e) {
                $("#form-container").fadeOut(function(e){
                    $("#thankYouContainer").fadeIn();
                })
            },
            error: function (e) {
                alert("There has been an error, please retry and if the error persists, please contact one of either Joni, Nils, Chris or Max")
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
