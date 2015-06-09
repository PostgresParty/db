var handlers = {};
var pg = require('pg');
var fs = require('fs');
var conString = process.env.DATABASE_URL ||
  "postgres://urbncabzccybtf:hX4a2tRWls9vMsUSG2H7R1t9HM@ec2-54-228-180-92.eu-west-1.compute.amazonaws.com:5432/dcu0qd0vuko1ct";

handlers.query = function(text, values, cb) {
  pg.connect(function(err, client, done) {
    client.query(text, values, function(err, result) {
      done();
      cb(err, result);
    });
  });
};

handlers['POST /addData'] = function(req, res) {
  var arr;
  req.on('data', function(chunk) {
    arr = JSON.parse(chunk);
  });

  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('INSERT into people (name, age, job, color) VALUES($1, $2, $3, $4)', arr, function(err, result) {
      // call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      // console.log(result.rows);
      //output: 1
    });
  });

  req.on('end', function() {
    res.end(JSON.stringify(arr));
  });
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
