(function(){
  $(function() {
    $( "#datepicker" ).datepicker();
  });

  $('#submitName').click(function() {
    var arr = [$('#nameInput').val(), $('#ageInput').val(), $('#jobInput').val(), $('#colorInput').val()];
    $.post( '/addData', JSON.stringify(arr), function(data) {
      console.log(data);
    });
  });
}());