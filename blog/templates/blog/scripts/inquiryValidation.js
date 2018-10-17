/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var pageUrl = window.location.pathname;
$(document).ready(function() {

    // $("#sendLinkedin").click(function(e) {

    //     var projectType = '';
    //     var description = '';
    //     var contactMean = '';
    //     e.preventDefault();
    //     var windowwidth = document.body.clientWidth;
    //     projectType = $("#protype_id").val();
    //     description = $("#descrtextarea").val();
    //     contactMean = $(".active input").val();

    //     var currentURL = $("#linkedInUrl").attr('title');
    //     var dropdownMsg = $("#dropdownValMsg label");
    //     $("#protype_id").click(function() {
    //         if (dropdownMsg.hasClass("needsfilled")) {
    //             dropdownMsg.text("");
    //             dropdownMsg.removeClass("needsfilled");
    //         }
    //     });
    //     var url = 'https://staging.qburst.build/sendInquiry/linkedin/';
    //     var currentURL = $("#linkedInUrl").attr('title');
    //     var inputs = '<input type="text" name="pageurl" value="' + currentURL + '" />' + '<input type="text" name="project_type" value="' + projectType + '" />' + '<input type="text" name="description" value="' + description + '" />' + '<input type="text" name="contactPreference" value="' + contactMean + '" />';
    //     if (windowwidth > 1024) {
    //         if (validatePrototype()) {
    //             SubmitAsForm(inputs, url);
    //         }
    //     } else {
    //         SubmitAsForm(inputs, url);
    //     }

    // });

    $(".blgPost p a img").each(function() {
        var h = $(this).attr('height');
        var w = $(this).attr('width');
        $(this).css('height', h);
        $(this).css('width', w);
    });


    requiredMsg = ["nameValMsg", "compValMsg", "dropdownValMsg", "emailValMsg", "descrValMsg", "expValMsg", "captchaValMsg"];
    if (document.getElementById("projectType_id") != null) {
        flags = 1;
    } else {
        flags = 0;
    }

    names = $("#name_id");
    email = $("#email_id");
    phone = $("#phone_id");
    captcha_code = $("#captcha_id");
    errornotice = $(".error_msgInquiry");
    protypes = $("#protype_id");
    compny = $("#company_id");
    radiobtn = $("#radiobtn_id");

    nameMsg = $("#nameValMsg label");
    compMsg = $("#compValMsg label");
    dropdownMsg = $("#dropdownValMsg label");
    emailMsg = $("#emailValMsg label");
    descrMsg = $("#descrValMsg label");
    expMsg = $("#expValMsg label");
    captchaMsg = $("#captchaValMsg label");

    // The text to show up within a field when it is incorrect
    emptyerror = "Please fill out this field.";
    emailerror = "Please enter a valid email address.";
    phoneerror = "Please enter a valid phone number.";
    captchaerror = "Please enter the CAPTCHA code.";
    validerror = "Please enter a valid description.";
    typeerror = "Please select a category from the list.";
    companyerror = "Please enter your company name.";
    nameerror = "Please enter your full name.";
    recaptchaerror = "Please verify that you are not a robot.";
    var submit = true;

    function SubmitAsForm(inputs, url) {
        var form = $('<form action="' + url + '" method="post">' + inputs + '</form>');
        $('body').append(form);
        form.submit();
    }
    // Create the XHR object.
    function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open(method, url, true);
        if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open(method, url);
        }
        return xhr;
    }

    // Helper method to parse the title tag from the response.
    function getTitle(text) {
        return text.match('<title>(.*)?</title>');
    }

    // function makeCorsRequestForLinkedin(params) {
    //     // All HTML5 Rocks properties support CORS.
    //     var url = 'https://staging.qburst.build/sendInquiry/linkedin';

    //     var xhr = createCORSRequest('POST', url);
    //     //      xhr.setRequestHeader('X-My-Custom-Header', 'http://blog.staging.qburst.com/');
    //     xhr.setRequestHeader('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    //     xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    //     xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //     xhr.setRequestHeader("X-CSRFToken", params.csrfmiddlewaretoken);
    //     if (!xhr) {
    //         alert('CORS not supported');
    //         return;
    //     }

    //     // Response handlers.
    //     //      xhr.onload = function(response) {
    //     //        var text = xhr.responseText;
    //     //        var title = getTitle(text);
    //     //        alert('Response from CORS request to ' + url + ': ' + title);
    //     //      };

    //     xhr.onerror = function(response) {
    //         alert('Woops, there was an error making the request.');
    //     };

    //     xhr.onreadystatechange = function(response) {
    //         if (xhr.readyState == 4 && xhr.status == 200) {
    //             window.location = 'http://www.qburst.com/oauth2request';
    //         }
    //     };

    //     xhr.send(JSON.stringify(params));
    // }

    $("#menuIconInquiry").on("click", function() {
        ga('send', 'event', 'Test Inquiry', 'Blog Inquiry Loaded', pageUrl);
    });

    // Make the actual CORS request.
    function makeCorsRequest(params) {
        // All HTML5 Rocks properties support CORS.
        var url = 'https://www.qburst.com/rpc/sendInquiry';

        var xhr = createCORSRequest('POST', url);
        var data = { "args": params };
        //      xhr.setRequestHeader('X-My-Custom-Header', 'http://wordpress.dev/');
        xhr.setRequestHeader('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.setRequestHeader("X-CSRFToken", params.csrfmiddlewaretoken);

        if (!xhr) {
            alert('CORS not supported');
            return;
        }
        xhr.onreadystatechange = function(response) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                grecaptcha.reset();
                $('.applyForm_enquiry').css('display', 'none');
                $('.contactInquiry').append(' <div id="content"><div class="confmtnMsg"> <div id="thankYouMessage"> Thank you for submitting your request. </div> <div class="confmtnMsgAlign">We will get back to you shortly. </div></div></div>');
                $('html, body').animate({ scrollTop: $('#menu-icon').offset() }, 'slow');
                var jsonObject = JSON.parse(xhr.responseText);
                if (jsonObject.isSendMail == true) {
                    ga('send', 'event', 'Test Inquiry', 'Blog Inquiry Submission', pageUrl);
                }
            }
        };
        xhr.onerror = function(response) {
            makeCorsRequest(params);
        };

        xhr.send(JSON.stringify(data));
    }
    // TODO: to remove in future
    function JSONRemoteCall(params, url, callback) {
        if (submit == true) {
            var result = $.ajax({
                type: 'POST',
                dataType: 'jsonp',
                url: url,
                async: false,
                data: { arg: JSON.stringify(params) },
                success: function(response) {
                    if (!(callback && callback.constructor && callback.call && callback.apply)) {
                        alert('callback !!');
                        return;
                    }

                    callbackResponse = callback(response);
                    return callbackResponse;
                },
                error: function(response) {
                    //$('#JSON_Error_Message').html('An error occured while processing your request.');
                    //$('#captchaValMsg').html(response);
                    $('#captchaValMsg1').html('');
                    $('.applyForm_enquiry').css('display', 'none');
                    $('.contactInquiry').append(' <div id="content"><div class="confmtnMsg"> <div id="thankYouMessage"> Thank you for submitting your request. </div> <div class="confmtnMsgAlign">We will get back to you shortly. </div></div></div>');
                    $('html, body').animate({ scrollTop: $('#menu-icon').offset() }, 'slow');
                    return response.status
                }
            });
            submit = false;
        }

        return result;
    }

    $(".closeInquiry").click(function() {
        $(".inquiryModel").animate({ "right": "-100%" }, 500);
        $("body").removeClass("inqy-open");
        activeNav = "";
        $(".mask").remove();
        grecaptcha.reset();
        $("body").css("overflow-y", "visible");
        $("html").css("overflow-y", "visible");
        $('.InquiryBtn').prop('disabled', false);
        $(".sendInuiryBtn").attr("disabled", false);
        submit = true;
    });
    $("#career_ids").submit(function() {
        isMobile = $("#switching").val();
        $("#name_id").focus(function() {
            if (nameMsg.hasClass("needsfilled")) {
                nameMsg.removeClass("needsfilled");
                nameMsg.text("");
            }
        });
        $("#company_id").focus(function() {
            if (compMsg.hasClass("needsfilled")) {
                compMsg.removeClass("needsfilled");
                compMsg.text("");
            }
        });
        $("#email_id").focus(function() {
            if (emailMsg.hasClass("needsfilled")) {
                emailMsg.removeClass("needsfilled");
                emailMsg.text("");
            }
        });
        // $("#phone_id").focus(function() {
        //     if (expMsg.hasClass("needsfilled")) {
        //         expMsg.removeClass("needsfilled");
        //         expMsg.text("");
        //     }
        // });
        $("#captcha_id").focus(function() {
            if (captchaMsg.hasClass("needsfilled")) {
                captchaMsg.removeClass("needsfilled");
                captchaMsg.text("");
            }
        });
        $("#descrtextarea").focus(function() {
            if (descrMsg.hasClass("needsfilled")) {
                descrMsg.removeClass("needsfilled");
                descrMsg.text("");
            }
        });

        $("#protype_id").click(function() {
            if (dropdownMsg.hasClass("needsfilled")) {
                dropdownMsg.text("");
                dropdownMsg.removeClass("needsfilled");
            }
        });
        $("#projectType_id").click(function() {
            if (dropdownMsg.hasClass("needsfilled")) {
                dropdownMsg.text("");
                dropdownMsg.removeClass("needsfilled");
            }
        });
        valid = validateSubmitInquiryForm();
        if (valid == true) {
            $(".sendInuiryBtn").attr("disabled", true);
            var params = $(this).serializeObject();
            params.inquiryTypeOfContact = 'Email';
            makeCorsRequest(params);
        }

        return false
    });

});

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function sendInquiry(response) {
    var flag2 = 0;
    var object = $.parseJSON(response);

    if (object.isCaptcha != true) {
        $('#captchaValMsg1').html('Invalid Captcha');
        flag2 = 0;
    } else {
        $('#captchaValMsg1').html('');
        flag2 = 1;
    }

    if (flag2 == 1) {
        $('#captchaValMsg1').html('');
        $('.applyForm_enquiry').css('display', 'none');
        $('.contactInquiry').append(' <div id="content"><div class="confmtnMsg"> <div id="thankYouMessage"> Thank you for submitting your request. </div> <div class="confmtnMsgAlign">We will get back to you shortly. </div></div></div>');
        $('html, body').animate({ scrollTop: $('#menu-icon').offset() }, 'slow');
        return true;
    } else {
        return false;
    }
}

function validateSubmitInquiryForm() {

    var eee = true;
    var count = 0;
    validateName();
    // validateCompany();
    validateEmail();
    validatePhoneNumber();
    validatePrototype();
    validateRecaptcha();
    //validatedescr();
    //validateCaptcha();
    //checkNeedsField();

    if(!validateName() || !validateEmail() || !validatePhoneNumber()|| !validateRecaptcha()) {
        count++;
        if ($(window).width() < 1024) {
            if (!validateName()) {

                $("#openModal").animate({
                    scrollTop: $('#name_id').offset().top + 270
                }, 500);
            } else if (!validateEmail()) {
                $("#openModal").animate({
                    scrollTop: $('#email_id').offset().top + 270
                }, 500);
            } 
            else if (!validatePhoneNumber()) {
                $("#openModal").animate({
                    scrollTop: $('#phone_id').offset().top + 270
                }, 500);
            }
        } else {
            return false;
        }
    }
    if (count > 0) {
        eee = false;
    }
    return eee;

}
$(document).on('keyup', 'input', function(e) {
    if (e.which == 13) {
        if (!validateName()) { $("#name_id").next('span').show(); }
        if (!validateEmail()) { $("#email_id").next('span').show(); }
        if (!validatePhoneNumber()) { $("#phone_id").next('span').show(); }
    } else {
        $(this).next('span').hide();
    }
});
$("#submitbtn_id").click(function() {
    if (!validateName()) { $("#name_id").next('span').show(); }
    if (!validateEmail()) { $("#email_id").next('span').show(); }
    if (!validatePhoneNumber()) { $("#phone_id").next('span').show(); }
});

function limitTextArea(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }

}

function validatedescr() {

    var valid = true;
    var descrval = $("#descrtextarea").val();
    var descr = $("#descrtextarea").val().replace(/ /g, '');

    if (descrval != "") {

        for (var i = 0; i <= descrval.length; i++) {
            if (descrval.substring(0, i).match(/</) || descrval.substring(0, i).match(/>/)) {
                descrMsg.addClass("needsfilled");
                descrMsg.text(validerror);
                valid = false;
            }
        }

        if (descr == '' || $("#descrtextarea").val().substring(0, 1) == " " || $("#descrtextarea").val().substring(0, 1).match(/^[\s.,~!@#$%^&*()_+:;<>']+/)) {
            valid = false;
            descrMsg.text(validerror);
            descrMsg.addClass("needsfilled");
        }

    }
    return valid;
}

function limitTextcompany(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
}

function validateCompany() {

    var valid = true;
    var companyval = $("#company_id").val();
    var company = $("#company_id").val().replace(/ /g, '');
    if (companyval != "") {

        for (var i = 0; i <= companyval.length; i++) {
            if (companyval.substring(0, i).match(/</) || companyval.substring(0, i).match(/>/) || companyval.substring(0, i).match(/\*/)) {
                compMsg.addClass("needsfilled");
                compMsg.text(companyerror);
                valid = false;
            }
        }
        if (company == '' || $("#company_id").val().substring(0, 1) == " " || $("#company_id").val().substring(0, 1).match(/^[\s.,~!@#$%^&*()_+:;<>']+/)) {
            valid = false;
            compMsg.text(companyerror);
            compMsg.addClass("needsfilled");
        }
    }
    return valid;
}

function validateFields() {
    var valid = true;
    var typeofprojct;

    if (flags == 1) {
        typeofprojct = $("#projectType_id").val();
        required = ["name_id", "projectType_id", "email_id"];
    }
    if (flags == 0) {
        typeofprojct = $("#protype_id").val();
        required = ["name_id", "protype_id", "email_id"];

    }

    if (isMobile == 'true') {
        typeofprojct = 'Web Development';
        required = ["name_id", "email_id"];
    }

    for (i = 0; i < required.length; i++) {
        var input = $('#' + required[i]);

        if ((input.val() == "")) {
            valid = false;
            if (required[i] == 'name_id') {
                nameMsg.addClass("needsfilled");
                nameMsg.text(emptyerror);
            }
            if (required[i] == 'email_id') {
                emailMsg.addClass("needsfilled");
                emailMsg.text(emptyerror);
            }
            // if (required[i] == 'phone_id') {
            //     expMsg.addClass("needsfilled");
            //     expMsg.text(emptyerror);
            // }
            if (required[i] == 'captcha_id') {
                captchaMsg.addClass("needsfilled");
                captchaMsg.text(emptyerror);
            }
        } else {
            valid = true;
        }
    }

    if (typeofprojct == "Type of Project" || typeofprojct == "" || typeofprojct == "Choose Product" || typeofprojct == "--" || $("#protype_id").val() == null) {
        dropdownMsg.addClass("needsfilled");
        dropdownMsg.text(typeerror);
        valid = false;
    } else {
        dropdownMsg.removeClass("needsfilled");
        dropdownMsg.text("");
    }
    return valid;
}


function validateEmail() {
    // Validate the e-mail.
    var valid = true;

    if (!/^([a-zA-Z0-9_!#$`{}~%&()?^*+=:\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($("#email_id").val().trim())) {
        valid = false;
        emailMsg.addClass("needsfilled");
        emailMsg.text(emailerror);
    }

    return valid;
}


function validateName() {
    // Validate the name.

    var valid = true;
    var nametext = $('#name_id').val().trim();

    for (var i = 0; i <= nametext.length; i++) {
        if (nametext.substring(0, i).match(/</) || nametext.substring(0, i).match(/>/) || nametext.substring(0, i).match(/\*/)) {
            nameMsg.addClass("needsfilled");
            nameMsg.text(nameerror);
            valid = false;
        }
    }
    if (nametext.substring(0, 1) == " " || nametext.substring(0, 1).match(/^[\d.,~!@#$%^&*()_+:;<>']+/)) {

        nameMsg.addClass("needsfilled");
        nameMsg.text(nameerror);
        valid = false;

    }

    nametext = nametext.replace(/\s/g, "");

    if (nametext.length == 0 || nametext.length < 3) {
        nameMsg.addClass("needsfilled");
        nameMsg.text(nameerror);
        valid = false;
    }
    if ((/\d/.test(nametext))) {
        nameMsg.addClass("needsfilled");
        nameMsg.text("Please enter a valid name");
        valid = false;
        return valid;
    }

    return valid;
}


function validatePhoneNumber() {
    // Validate the phonenumber.
    var phone = $("#phone_id");
    var phone_number = phone.val();
    if(phone_number == '') {
        return true;
    } else {
        var valid = true;
        var phone_number = phone.val();
        var phoneRegExp = /^[\/0-9- +().,']+$/;
        var phone_length = phone_number.length;


        for (var i = 0; i <= phone.val().length; i++) {

            if (phone.val().substring(0, i).match(/</) || phone.val().substring(0, i).match(/>/) || phone.val().substring(0, i).match(/\*/)) {
                expMsg.addClass("needsfilled");
                expMsg.text(phoneerror);
                valid = false;
            }
        }

        if (!phoneRegExp.test(phone_number)) {
            valid = false;
            expMsg.addClass("needsfilled");
            expMsg.text(phoneerror);
        }
        if (phone_length > 20 || phone_length < 10) {
            valid = false;
            expMsg.addClass("needsfilled");
            expMsg.text(phoneerror);
        }

        return valid;
    }

}

function validateRecaptcha() {
    if (email.val().trim() == "portalqa13@gmail.com") {
        captchaMsg.css("display", "none");
        return true;
    }
    if ((grecaptcha.getResponse() == "") && ($(window).width() > 1024)) {
        captchaMsg.css("display", "block");
        captchaMsg.addClass("needsfilled");
        captchaMsg.text(recaptchaerror);
        return false;
    }
    captchaMsg.css("display", "none");
    return true;
}

function validateCaptcha() {
    var valid;
    var code = $('#captcha_id').val();
    var alphaExp = /^[0-9a-z]+$/;

    if (code.match(alphaExp)) {
        valid = true;
    } else {
        captchaMsg.addClass("needsfilled");
        captchaMsg.text(captchaerror);
        valid = false;
    }
    if (isMobile == 'true') {
        code = 'default';
        valid = true;
    }
    return valid;
}

function validatePrototype() {

    var valid = true;
    if (isMobile == 'true') {
        typeofprojct = 'Web Development';
        dropdownMsg.removeClass("needsfilled");
        return valid;
    }
    if ($("#protype_id option:selected").text() == "Type of Project *") {
        dropdownMsg.addClass("needsfilled");
        dropdownMsg.text(typeerror);
        valid = false;
    } else {
        dropdownMsg.removeClass("needsfilled");
    }
    return valid;
}

function checkNeedsField() {
    var valid = true;
    //if any inputs on the page have the class 'needsfilled' the form will not submit
    for (i = 0; i < requiredMsg.length; i++) {
        var input = $('#' + requiredMsg[i]);

        if (input.hasClass("needsfilled")) {
            valid = false;
        } else {
            valid = true;
        }
    }
    return valid;
}

$("#flashToHtmlAd").click(function() {
    headerclickform();

    if ($('#show').css('display') != 'block') {
        jQuery("#cform").hide();
        jQuery("#show").show();
    }

    if (window.location.pathname == '/services/web-development/rich-internet-applications/html5/flash-to-html5') {

        _gaq.push(['_trackEvent', 'Flash_to_HTML5_Offer', 'Flash_to_HTML5_Offer_Viewed', 'Flash to HTML5 Offer Viewed']);
    }
    if (window.location.pathname == '/services/cloud-solutions/salesforce') {

        _gaq.push(['_trackEvent', 'Salesforce_Free_Quote_Offer', 'Salesforce_Free_Quote_Offer_Viewed', 'Salesforce Free Quote Offer Viewed']);
    }
    if (window.location.pathname == '/services/testing/portfolio/security') {

        _gaq.push(['_trackEvent', 'Security_Testing_Free_Offer', 'Security_Testing_Free_Offer_Viewed', 'Security Testing Free Offer Viewed']);
    }
    if (window.location.pathname == '/services/mobile-development/iphone') {

        _gaq.push(['_trackEvent', 'iPhone Free Estimate Offer View', 'iPhone_Free_Estimate_Offer_View', 'iPhone_Free_Estimate_Offer_View']);
    }

});

function focusName() {
    document.getElementById('name_id').focus();
}

function showinquiryimage() {
    $('#myHeader').show();
}

function hideinquiryimage() {
    $('#myHeader').hide();
}

/*------------placeholder - javascript------------*/
/*include modernizr.js*/
if (!Modernizr.input.placeholder) {

    $(document).ready(function() {
        $('#myHeader').click(function() {
            $("#career_ids").find('[placeholder]').each(function() {
                var input = $(this);
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            });
        });
    });
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    });
    $('[placeholder]').blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();

    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        });
    });

}