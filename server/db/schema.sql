DROP DATABASE IF EXISTS dogmeetdog;

CREATE DATABASE dogmeetdog;

\c dogmeetdog;

CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE IF NOT EXISTS Users (
  id serial UNIQUE PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  email citext UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS Pets (
  id serial UNIQUE PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  age INT NOT NULL,
  photo TEXT NOT NULL,
  breed VARCHAR(100) NOT NULL,
  size VARCHAR(10) NOT NULL,
  personality VARCHAR(50) NOT NULL,
  activity VARCHAR(50) NOT NULL,
  FOREIGN KEY(user_id)
    REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Chats (
  id serial UNIQUE PRIMARY KEY NOT NULL,
  user_one_id INT NOT NULL,
  user_two_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS Messages (
  id serial UNIQUE PRIMARY KEY NOT NULL,
  chat_id INT NOT NULL,
  sender VARCHAR(100) NOT NULL,
  timestamp DATE NOT NULL DEFAULT CURRENT_DATE,
  message VARCHAR(255) NOT NULL,
  FOREIGN KEY(chat_id)
    REFERENCES Chats(id)
);

