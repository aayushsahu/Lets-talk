use letstalkdb;

create table Users (
	user_id CHAR(36) PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (user_id, username, password, email) 
VALUES 
('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'user1', 'password1', 'user1@example.com'),
('1c7e5fe2-97e5-4ad9-929e-35f6fb575007', 'user2', 'password2', 'user2@example.com'),
('9f47c72f-7729-490a-9d44-d789be8e3b82', 'user3', 'password3', 'user3@example.com');

select * from users;