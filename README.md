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
