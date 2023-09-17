-- Create a table
CREATE TABLE employees (
  "id" serial PRIMARY KEY,
  "firstName" VARCHAR(50)  NOT NULL,
  "lastName" VARCHAR(50) NOT NULL,
  "title" VARCHAR(100) NOT NULL,
  "hiredDate" VARCHAR(100) NOT NULL,
  "address" VARCHAR(100) NOT NULL,
  "contactNumber" VARCHAR(100) NOT NULL
);
 
-- Insert initial data
INSERT INTO employees ( "firstName", "lastName", "title", "hiredDate", "address", "contactNumber")
VALUES
  ('Jon', 'Snow', 'Manager', '2022-10-23', '15 bankwell street manchester m15 5la', '0799999999'),
  ('George', 'Bush', 'associate', '10/11/2022', 'somewhere manchester m15 5la', '07888888888'),
  ('John', 'Doe', 'Software Engineer', '2023-09-25', '123 Main St', '123-456-7890'),
  ('Alice', 'Smith', 'Product Manager', '2023-09-26', '456 Elm St', '987-654-3210');

