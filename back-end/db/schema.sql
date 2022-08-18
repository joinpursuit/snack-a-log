DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 



CREATE TABLE snacks(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  fiber INT NOT NULL,
  protein INT NOT NULL,
  added_sugar INT NOT NULL,
  is_healthy BOOLEAN,
  image TEXT
)


