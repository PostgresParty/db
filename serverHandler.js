var handlers = require('./handlers.js');
var fs = require('fs');
var pg = require('pg'); //postgres
var index = fs.readFileSync(__dirname + '/index.html');

function serverHandler (req, res){

  pg.connect(process.env.DATABASE_URL, function(err, client) {
    var query = client.query('SELECT * FROM your_table');

    query.on('row', function(row) {
      console.log(JSON.stringify(row));
    });
  });

  if (req.url.length === 1) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(index.toString());
    console.log(process.env.DATABASE_URL);
  }

  else {
    var route = req.method + " " + req.url;
    var handler = handlers[route];
    if (handler) {
      handler(req, res);
    } else {
      handlers.generic(req, res);
    }
  }
}

module.exports = serverHandler;
