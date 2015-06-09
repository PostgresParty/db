# Heroku Postgres Database usage

### What you need:
* Working knowledge of Heroku and a live site
* The npm module 'pg'
* Postgres installed locally on your machine

### Useful commands:
+ heroku pg:psql [allows you to work on your heroku DB from the command line]
+ create table \[table name\] (\[table row 1\] \[data type row will hold\], \[table row 2\] \[data type row will hold\])
+ select \* from \[table name\]

Refer to 'handlers.js' for working database insert code.

### Resources:
http://www.jitendrazaa.com/blog/webtech/how-to-use-postgresql-in-nodejs/
https://addons.heroku.com/heroku-postgresql
https://github.com/brianc/node-postgres/wiki/Example
http://stackoverflow.com/questions/8484404/what-is-the-proper-way-to-use-the-node-js-postgresql-module
https://github.com/brianc/node-postgres