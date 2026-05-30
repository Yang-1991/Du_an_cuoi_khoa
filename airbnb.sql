CREATE DATABASE IF NOT EXISTS airbnb;
USE airbnb;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Bookings;
DROP TABLE IF EXISTS Rooms;
DROP TABLE IF EXISTS Locations;
DROP TABLE IF EXISTS Users;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  birthDay VARCHAR(255),
  gender VARCHAR(255),
  role VARCHAR(255) DEFAULT 'USER',
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  guests INT DEFAULT 1,
  bedrooms INT DEFAULT 1,
  beds INT DEFAULT 1,
  bathrooms INT DEFAULT 1,
  description TEXT,
  price INT DEFAULT 0,
  washingMachine BOOLEAN DEFAULT 0,
  iron BOOLEAN DEFAULT 0,
  television BOOLEAN DEFAULT 0,
  airConditioner BOOLEAN DEFAULT 0,
  wifi BOOLEAN DEFAULT 0,
  kitchen BOOLEAN DEFAULT 0,
  parking BOOLEAN DEFAULT 0,
  pool BOOLEAN DEFAULT 0,
  image VARCHAR(255),
  locationId INT,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (locationId) REFERENCES Locations(id)
);

CREATE TABLE Bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  checkIn DATETIME NOT NULL,
  checkOut DATETIME NOT NULL,
  guests INT DEFAULT 1,
  userId INT,
  roomId INT,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (roomId) REFERENCES Rooms(id)
);

CREATE TABLE Comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  rating INT DEFAULT 5,
  userId INT,
  roomId INT,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (roomId) REFERENCES Rooms(id)
);

INSERT INTO Users (name, email, password, phone, birthDay, gender, role)
VALUES
  ('Nguyen Van A', 'a@gmail.com', '123456', '0909000001', '2000-01-01', 'male', 'USER'),
  ('Tran Thi B', 'b@gmail.com', '123456', '0909000002', '2001-02-02', 'female', 'USER'),
  ('Admin', 'admin@gmail.com', '123456', '0909000003', '1999-03-03', 'male', 'ADMIN');

INSERT INTO Locations (name, province, country, image)
VALUES
  ('Da Lat', 'Lam Dong', 'Viet Nam', 'https://example.com/da-lat.jpg'),
  ('Vung Tau', 'Ba Ria - Vung Tau', 'Viet Nam', 'https://example.com/vung-tau.jpg'),
  ('Da Nang', 'Da Nang', 'Viet Nam', 'https://example.com/da-nang.jpg');

INSERT INTO Rooms (
  name,
  guests,
  bedrooms,
  beds,
  bathrooms,
  description,
  price,
  washingMachine,
  iron,
  television,
  airConditioner,
  wifi,
  kitchen,
  parking,
  pool,
  image,
  locationId
)
VALUES
  ('Phong view nui Da Lat', 2, 1, 1, 1, 'Phong sach dep gan trung tam', 500000, 1, 1, 1, 1, 1, 1, 1, 0, 'https://example.com/room-1.jpg', 1),
  ('Can ho gan bien Vung Tau', 4, 2, 2, 2, 'Can ho rong rai gan bai bien', 900000, 1, 1, 1, 1, 1, 1, 1, 1, 'https://example.com/room-2.jpg', 2),
  ('Studio Da Nang', 2, 1, 1, 1, 'Studio hien dai gan cau Rong', 650000, 0, 1, 1, 1, 1, 0, 1, 0, 'https://example.com/room-3.jpg', 3);

INSERT INTO Bookings (checkIn, checkOut, guests, userId, roomId)
VALUES
  ('2026-06-01', '2026-06-03', 2, 1, 1),
  ('2026-06-05', '2026-06-07', 4, 2, 2);

INSERT INTO Comments (content, rating, userId, roomId)
VALUES
  ('Phong sach va dep', 5, 1, 1),
  ('Vi tri thuan tien', 4, 2, 2);
