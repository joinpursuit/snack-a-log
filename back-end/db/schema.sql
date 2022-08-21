DROP DATABASE IF EXISTS ddsk93e35n68k;
CREATE DATABASE ddsk93e35n68k; 

\c ddsk93e35n68k; 

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT,
    fiber INTEGER,
    protein INTEGER,
    added_sugar INTEGER,
    is_healthy BOOLEAN,
    image VARCHAR(2083)
)
