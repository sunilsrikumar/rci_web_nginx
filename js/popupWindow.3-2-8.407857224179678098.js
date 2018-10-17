function disableBackground() {
	var docSize = getDocumentSize();
	if ($('#transparent')) {
		$("#transparent").css("display", "block");
		$("#transparent").css("width", docSize.w + 'px');
		$("#transparent").css("height", docSize.h + 'px');
	}
}
function enableBackground() {
	if ($('#transparent')) {
		$("#transparent").css("display", "none");
	}
}
function getDocumentSize() {
	var width = 0;
	var height = 0;
	if (document.documentElement && document.documentElement.scrollWidth
			&& document.documentElement.scrollHeight) {
		width = document.documentElement.scrollWidth;
		height = document.documentElement.scrollHeight;
	} else {
		if (document.body && document.body.offsetWidth
				&& document.body.scrollHeight) {
			width = document.body.scrollWidth;
			height = document.body.scrollHeight;
		}
	}
	return {
		w : width,
		h : height
	};
}
function getOSEnvironment() {
	var OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win") != -1)
		OSName = "Windows";
	if (navigator.appVersion.indexOf("Mac") != -1)
		OSName = "MacOS";
	if (navigator.appVersion.indexOf("X11") != -1)
		OSName = "UNIX";
	if (navigator.appVersion.indexOf("Linux") != -1)
		OSName = "Linux";
	return OSName;
}
$(document)
		.ready(
				function() {
					var OSName = getOSEnvironment();
					if (OSName == 'Windows' || OSName == 'MacOS') {
						$("#PenQAppend")
								.append(
										'<p class="nonLinux">'
												+ 'PenQ is Linux based and can be downloaded only to Debian based distributions.'
												+ '</p>');
						$("#PenQAppend .firefoxBtn a").bind("click", function (e) {
        					e.preventDefault();
    					});	
					}
				});
$('#popupDownload')
		.bind(
				'click',
				function() {
					$('#popupWindow').fadeIn('slow');
					var OSName = getOSEnvironment();
					if (OSName == 'Windows' || OSName == 'MacOS') {
						$('#disabledDownloadButton').css('display', 'none');
						$('#thankyouMessage').css('display', 'block');
						$('#downloadForm').css('display', 'none');
						$('#hideDiv').css('display', 'none');
						$('#thankyouMessage')
								.html(
										'<h4 style="text-align: center; font-family: Verdana, sans-serif, Arial; font-size: 16px; font-weight: bold; ">PenQ - Free Security Testing Browser Bundle</h4>'
												+ '<p style="width: 93%; text-align: center; font-family: Verdana, sans-serif, Arial; font-size: 15; margin-top: 100px;">'
												+ '<i style="font-weight: bold; ">Thank you for your interest in PenQ!</i> <br /><br /><br /><i style="font-weight: bold; ">PenQ is Debian based</i> and does not run on Windows/Mac operating systems. <br /> To install and start using PenQ, try this </i><i style="font-weight: bold; ">download in a Linux/Ubuntu environment.</i>'
												+ '</p>');
						$('#transparent').fadeIn('fast').delay(15000).fadeOut(
								'fast');
						$('#popupWindow').fadeIn('slow').delay(15000).hide(0);
					} else {
						$('#downloadForm').css('display', 'block');
						$('#thankyouMessage').css('display', 'none');
					}

					disableBackground();
					$('#namePenQValMsg label').html('');
					$('#compPenQValMsg label').html('');
					$('#emailPenQValMsg label').html('');
					$('#checkPenQValMsg label').html('');
				});

$('#popupClose').bind('click', function() {
	$('#popupWindow').fadeOut("slow");
	$("#container").css({ // this is just for style
		"opacity" : "1"
	});
	enableBackground();
	$('#downloadForm').clearForm();
});
