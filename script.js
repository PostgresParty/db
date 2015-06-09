(function(){
  $(function() {
    $( "#datepicker" ).datepicker();
  });

  $('#submitButton').click(function() {
    if($('#nameInput').val().length < 1 || $('#ageInput').val().length < 1 ||
        $('#jobInput').val().length < 1 || $('#colorInput').val().length < 1) {
      alert('Please fill in the required fields.');
    } else {
      var arr = [
        $('#nameInput').val(), $('#ageInput').val(),
        $('#jobInput').val(), $('#colorInput').val()
      ];
      $.post( '/addData', JSON.stringify(arr), function(data) {
        console.log(data);
      });

      $('#nameInput').val('');
      $('#ageInput').val('');
      $('#jobInput').val('');
      $('#colorInput').val('');
    }
  });

  $('.dataInput').keypress(function(e){
    if(e.keyCode == 13) {
      $('#submitButton').click();
    }
  });

}());