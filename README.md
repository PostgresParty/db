# db
Getting warm and comfortable in front of the fire with PostgreSQL

# WHY
* Why would you want to use this database?

With PostgreSQL, no-one can sue you for breaking licensing agreements, as there is no associated licensing cost for the software.

Strong community of PostgreSQL professionals and enthusiasts online.

PostgreSQL is a reliable and stable software. It is extremely common for companies to report that PostgreSQL has never, ever crashed for them in several years of high activity operation. Not even once.

The source code is available to all at no charge. If you have a need to customise or extend PostgreSQL in any way then you are able to do so with a minimum of effort, and with no attached costs.

PostgreSQL is available for almost every brand of Unix (34 platforms with the latest stable release), and Windows compatibility is available via the Cygwin framework. Native Windows compatibility is also available with version 8.0 and above.

PostgreSQL has been designed and created to have much lower maintenance and tuning requirements than the leading proprietary databases, yet still retain all of the features, stability, and performance.

There are many high-quality GUI Tools available for PostgreSQL from both open source developers and commercial providers.

* What application areas is it suitable for?






* Who else is using it and what are they using it for?

PostgreSQL checks email. Server-based virus scanning services offered by McAfee, Trend Micro, Comodo, Project Honey Pot and some other more secretive enterprises use PostgreSQL.

PostgreSQL has been used by LastFM.

Skype uses PostgreSQL to store all Skype chat and call activity. Call is routed through to an external VOIP service, running on Asterisk, which also uses PostgreSQL.

Afilias - A global provider of domain name registry services. This Ireland-based company manages over 900,000 domain names and over 10 million records in its PostgreSQL-backed database.

BASF - The worlds largest chemical company, uses PostgreSQL to store the data for their U.S. Agribusiness E-Commerce website.

And many more ...


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
