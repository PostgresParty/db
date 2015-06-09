(function(){
  $(function() {
    $( "#datepicker" ).datepicker();
  });

  $('#submitName').click(function() {
    // if($('#nameInput').val().length > 0){
      var arr = [$('#nameInput').val(), $('#dataInput').val()];
      $.post( '/addName', JSON.stringify(arr), function(data) {
        console.log(data);
      });
    // }
    // var newClapInput = $('#newClapInput').val();
    // if(newClapInput.length > 0) {
    //   if(newClapInput.indexOf("<") > -1 || newClapInput.indexOf(">") > -1) {
    //     alert("Behave yourself!");
    //   } else {
    //     $.post( '/addClap', newClapInput, function(data) {
    //       var newClap = JSON.parse(data);
    //       socket.emit('new clap', data);
    //     });
    //   }
      
    //   $('#newClapInput').val('');

    // } else {
    //   alert("Provide your egotistical ramblings in the text box.");
    // }
  });
}());