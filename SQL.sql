CREATE DATABASE event_booking;

USE event_booking;

CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_number INT NOT NULL,
    buyer_code VARCHAR(50) NOT NULL,
    event_name VARCHAR(100) NOT NULL,
    ticket_type VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
