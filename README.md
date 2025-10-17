# Backend Template

You can use this repository as a template for your backend. It comes with a `users` table
as well as routes to register and login.

## Usage

1. Change the name of the package in `package.json`.
2. Change the database name from `foobar` in the `db:schema` script.
3. Update the environment variables in `example.env` and rename the file to `.env`.
-------------------

Installations:
npm i pg express @faker-js/faker


--------------
Backend EzSplit
1.Databases Called EzSplit
2.Create the tables (Customer, tables_number, menu_table, menu)
•Customer: id serial(pk), Name text (not null), email text(null), phone_number integer(null), number_of_guests integer(null)
•tables_number: id serial (pk), number(unique, not null)
•Menu: id serial(pk), items text (not null), prices float (not null), image optional(URL)
•menu_table: id serial (pk), t_ id serial(fk), m_id serial(fk)
3a. Connect to the EZSPLIT database and run the schema to create all the tables:(Terminal run: psql -d EZSPLIT -f db/schema.sql)
3b. Perfect! The tables have been created successfully. Now let's verify that all the tables are present in your EZSPLIT database:(Terminal run: psql -d EZSPLIT -c "\dt")
3c. Seed the data in the db using (npm run db:seed)
4. Create or modify folders.
•Api: customer.js, tableNumber.js, menu.js, menuTable.js
•db/queries: customer.js, tableNumber.js, menu.js, menuTable.js
5. Finale check for the routers. (edited) 
