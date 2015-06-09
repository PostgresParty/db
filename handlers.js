var handlers = {};
var pg = require('pg');
var fs = require('fs');

handlers['POST /addName'] = function(req, res) {
  var pg = require('pg');
  var conString = process.env.DATABASE_URL ||
    "postgres://urbncabzccybtf:hX4a2tRWls9vMsUSG2H7R1t9HM@ec2-54-228-180-92.eu-west-1.compute.amazonaws.com:5432/dcu0qd0vuko1ct";
  var client = new pg.Client(conString);
  client.connect();
  res.end(conString);
  // var query = client.query("insert into employee (firstName,lastName,email,mobile) "+
  //                         "values ('"+req.query.fName+"','"+req.query.lName+"','"+
  //                             req.query.email+"','"+req.query.mbl+"')");
  // query.on("end", function (result) {
  //     client.end();
  //     res.write('Success');
  //     res.end();
  // });
};

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
