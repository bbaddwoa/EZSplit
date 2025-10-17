-- Create tables in EZSplit database
-- Note: Database should already exist before running this script
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS menu_table;
DROP TABLE IF EXISTS table_number;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id serial PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password text NOT NULL
);
CREATE TABLE customer (
  id serial PRIMARY KEY,
 name text NOT NULL ,
 email text NULL,
 phone_number BIGINT NULL
);
CREATE TABLE table_number (
  id serial PRIMARY KEY,
  number integer UNIQUE NOT NULL
);
CREATE TABLE menu (
  id serial PRIMARY KEY,
 items text NOT NULL ,
 prices float NOT NULL,
 image_url TEXT
);
CREATE TABLE menu_table (
  id serial PRIMARY KEY,
 table_id integer NOT NULL REFERENCES table_number(id) ON DELETE CASCADE,
 menu_id integer NOT NULL REFERENCES menu(id) ON DELETE CASCADE
);
