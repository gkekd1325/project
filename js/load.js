// $('.calendarload').load('calendar.html');

$(".click_pop").click(function(e){
  e.preventDefault();
  var target = $(this).attr("href");
  
  $("#clientEditorModal .modal-content").load(target, function() {
    $("#clientEditorModal").modal("fadeIn");
  });
});