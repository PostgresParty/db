$(function() {
  $( "#datepicker" ).datepicker();
});

$('#submitButton').click(function() {
  console.log("click!");
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