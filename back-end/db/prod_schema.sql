DROP DATABASE IF EXISTS ;




CREATE TABLE snacks(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  fiber INT NOT NULL,
  protein INT NOT NULL,
  added_sugar INT NOT NULL,
  is_healthy BOOLEAN,
  image TEXT
)


