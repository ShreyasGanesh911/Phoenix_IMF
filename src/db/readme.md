## Create table in postgres
CREATE TABLE gadgets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    status TEXT CHECK (status IN ('Available', 'Deployed', 'Destroyed', 'Decommissioned')) DEFAULT 'Available',
    decommissioned_at TIMESTAMP NULL
);

## Insert data into table

INSERT INTO gadgets (name, status) 
VALUES ('The Chameleon', 'Available');

<!-- Update data in table
UPDATE gadgets 
SET status = 'Deployed' 
WHERE id = '123e4567-e89b-12d3-a456-426614174000';

Delete data from table
DELETE FROM gadgets WHERE id = '123e4567-e89b-12d3-a456-426614174000';

Get data from table
SELECT * FROM gadgets;

Get data from table with condition
SELECT * FROM gadgets WHERE status = 'Available';

Delete gadget from table -->


