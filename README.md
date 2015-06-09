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
