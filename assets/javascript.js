
$(document).ready(function() {
$(".Close").click(function() {
 $("#notification").toggleClass("Closed");
})
})

$(document).ready(function() {
$(".Subscribe").click(function() {
 $(".Subscribe").toggleClass("Active");
})
})

//Fonction pour faire remonter la page en haut//
$(document).ready( function () {
$('.OnTop').click( function() {
   $('html,body').animate({scrollTop: 0}, 'slow');
})
})