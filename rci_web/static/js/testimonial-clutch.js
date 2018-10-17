 $(document).ready(function() {
     $('.scrollbar-inner').scrollbar();
 });
 $(window).resize(function() {
     clutchEdge();
 });
 $(window).load(function() {
     setTimeout(function() {
         clutchEdge();
     }, 2000);
 });

 function openCity(evt, cityName) {
     var i, clutchContent, tablinks;
     clutchContent = document.getElementsByClassName("clutchContent");
     for (i = 0; i < clutchContent.length; i++) {
         clutchContent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(cityName).style.display = "block";
     evt.currentTarget.className += " active";
 }
 document.getElementById("defaultOpen").click();
 $(".viewTestimonial").click(function(e) {

     e.preventDefault();
     $(".popupModal").show();
     $('.popupModal').css({
         'opacity': '1',
         'z-index': '999'
     });
     $('#header').css({ 'z-index': '99' });
 });
 $(".viewTestimonialFirst").click(function() {
     $(".popupModalFirst").show();
     $('.popupModalFirst').css({
         'opacity': '1',
         'z-index': '999'
     });
     $('#header').css({ 'z-index': '99' });
 });
 $(".popupClose").click(function() {
     $(".popupModal").hide();
     $('.popupModal').css({
         'opacity': '0',
         'z-index': '-1',
         'display': 'none'
     });
     $('#header').css({ 'z-index': '101' });
 });
 $(".popupCloseFirst").click(function() {
     $(".popupModalFirst").hide();
     $('.popupModalFirst').css({
         'opacity': '0',
         'z-index': '-1',
         'display': 'none'
     });
     $('#header').css({ 'z-index': '101' });
 });
 window.onclick = function(event) {
     if (event.target == $('.popupModal')) {
         $('.popupModal').style.display = "none";
     }
 }

 function clutchEdge() {
     if (!($(".clutch-widget iframe").length)) {
         $('.clutchForEdge').css({ 'display': 'block' });
     }
     if (($(window).width() < 768) && !($(".clutch-widget iframe").length)) {
         $('.clutchForEdge').css({ 'display': 'block' });
         $('.viewMoreWrapperMob').css({ 'display': 'block' });
     }
 }