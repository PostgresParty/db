# db
Getting warm and comfortable in front of the fire with PostgreSQL

### SQL (Syntax QL)

+ Strings should be inside 'single quotation marks'.
+ end each query with a semi-colon;
+ `LIKE` and `EQUAL` when used with strings are cAsE SeNsItIvE.
+ The table and column names must start with a letter and can be followed by letters, numbers, or underscores - not to exceed a total of 30 characters in length
  + String row entries have a maximum length of 255 characters. Smaller maxima (variable or exact) can be specified in the column for the row. String row entries have a maximum length of 255 characters. Smaller maxima (variable or exact) can be specified in t
+ Do **not** `select` any SQL reserved words when `create`ing your column names, they cannot be `insert`ed there.
+ While column names do not have to be put into quotation marks, if a 'value' is a string, it 'must be put into' quotation marks.
+ When deleting from a table, is you leave off the `where` clause, you will not receive a syntax error... you will delete **all** records. `delete from childhood_memories;`.

### Installing PostgreSQL

Start by installing the latest version of PostgreSQL on your computer using the package manager of your choice.

eg in Homebrew

`brew install postgres`

Now if brew hasn't automatically run your database server you can do it manually as follows (mac users)

`pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`

(And stop manually)

`pg_ctl -D /usr/local/var/postgres stop -s -m fast`

### Getting started locally

`createdb mydb`

creates your database named mydb!

Note: Max 63 characters.. and can't use the same name twice.

`dropdb yourdb`

deletes your database, haha!

`psql -U username -l`

Lists databases for a given user. Note you'll have 2/3 extra ones that are installed with it.

How lets look at our database using the PostgreSQL interactive terminal program.

`psql mydb`


Useful commands when in interactive terminal:
 + \dt to list all tables in your database
 + \h for help with SQL commands
 + \? for help with psql commands
 + \g or terminate with semicolon to execute query
 + \q to quit


 try these commands:
 + `SELECT version();`
 + `SELECT current_date;`
 + `SELECT 2+2;`


 Separating your commands by semicolons you can write .sql files that can be loaded into your database. Run psql but now add the -s option which puts you in single step mode which pauses before sending each statement to the server.

`psql -s mydb`

 `mydb=> \i filename.sql`


The \i command here reads in commands from the specified file.


###Info...

You can enter this into psql with the line breaks. psql will recognize that the command is not terminated until the semicolon.

White space (i.e., spaces, tabs, and newlines) can be used freely in SQL commands. That means you can type the command aligned differently than above, or even all on one line. Two dashes ("--") introduce comments. Whatever follows them is ignored up to the end of the line. SQL is case insensitive about key words and identifiers, except when identifiers are double-quoted to preserve the case (not done above).

varchar(80) specifies a data type that can store arbitrary character strings up to 80 characters in length. int is the normal integer type. real is a type for storing single precision floating-point numbers. date should be self-explanatory. (Yes, the column of type date is also named date. This might be convenient or confusing — you choose.)
PostgreSQL supports the standard SQL types int, smallint, real, double precision, char(N), varchar(N), date, time, timestamp, and interval, as well as other types of general utility and a rich set of geometric types. PostgreSQL can be customized with an arbitrary number of user-defined data types. Consequently, type names are not key words in the syntax, except where required to support special cases in the SQL standard.
