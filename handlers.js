var handlers = {};
var fs = require('fs');

// handlers['POST /delete'] = function(req, res) {
//   var time;
//   req.on('data', function(chunk) {
//     time = chunk + ''; //turns clap input box buffer into text
//   });

//   req.on('end', function() {
//     client.srem("tweets", -1, time);
//     res.end();
//   });
// };

handlers.generic = function(req, res) {
  fs.readFile(__dirname + req.url, function(err, data){
    if (err){
      res.end();
    }
    else {
      var ext = req.url.split('.')[1];
      res.writeHead(200, {'Content-Type' : 'text/' + ext});
      res.end(data);
    }
  });
};

module.exports = handlers;
