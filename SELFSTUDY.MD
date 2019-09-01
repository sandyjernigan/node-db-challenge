## Self-Study/Essay Questions

- [x] Explain the difference between `Relational Databases` and `SQL`.

> SQL Databases are normally referred to as `Relational Databases`. Relational Databases defines and manipulate data using SQL. SQL, structured query language, is the language that interacts with the database in a specific way. Relational Databases are versatile and widely used however they can be restrictive requiring predefined standards.   
> `NoSQL Databases` are considered unstructured compared to their SQL Database processor. NoSQL has a dynamic  schema and offers some additional flexibility. However, these do have limitations attempting to use complex queries.

- [x] Why do tables need a `primary key`?

> A `primary key` is important for the table structure and accessibility. This key can make it easier to pull specific information from the row-level access. It is also one of the preferred methods to update table data, as you can update the row based off of the primary key in that row. 

- [x] What is the name given to a table column that references the primary key on another table?

> `Foreign keys` are the type of table field that references the primary key on another table. These can be used to link a record in one table to a record in another table.

- [x] What do we need in order to have a _many to many_ relationship between two tables?

> An `intermediary table` is the best model to use to create a many-to-many relationship. This table holds foreign keys that reference the primary key on the related tables so data can be as ‘DRY’ as possible.