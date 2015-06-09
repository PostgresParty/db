# Heroku Postgres Database Usage

### What you need:
* Working knowledge of Heroku and a live site

### Basic Guide:
+ Get your basic site/app live on Heroku
+ Add npm module 'pg' to your repo
+ Install Postgres to your locally to your machine
+ Add Postgres to your Heroku app
+ Send data as usual from your front end to your server using request handlers
+ Use Postgres query commands to interact with your database

### Useful in-repo commands:
+ heroku pg:psql (allows you to work on your heroku DB from the command line)
+ watch heroku pg:info (allows you to observe your database live)
+ create table \[table name\] (\[table row 1\] \[data type row will hold\], \[table row 2\] \[data type row will hold\])
+ select \* from \[table name\]

Refer to 'handlers.js' for working database insert code, and package.json for dependencies etc.

### Resources:
+ https://devcenter.heroku.com/articles/getting-started-with-nodejs
+ http://www.postgresql.org/docs/current/static/sql-commands.html
+ http://www.jitendrazaa.com/blog/webtech/how-to-use-postgresql-in-nodejs/
+ https://addons.heroku.com/heroku-postgresql
+ https://github.com/brianc/node-postgres
+ https://github.com/brianc/node-postgres/wiki/Example
+ http://stackoverflow.com/questions/8484404/what-is-the-proper-way-to-use-the-node-js-postgresql-module
+ http://www.postgresql.org/docs/9.0/static/dml-insert.html