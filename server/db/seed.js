INSERT INTO USERS(name, email)
VALUES('Kyle', 'knissleytest@gmail.com');

INSERT INTO USERS(name, email)
VALUES('Jake', 'jnissleytest@gmail.com');

INSERT INTO USERS(name, email)
VALUES('Kat', 'kattest@gmail.com');

INSERT INTO USERS(name, email)
VALUES('John', 'johntest@gmail.com');

INSERT INTO USERS(name, email)
VALUES('Jerremy', 'jerremytest@gmail.com');

INSERT INTO USERS(name, email)
VALUES('Hamilton', 'hamiltontest@gmail.com');

INSERT INTO USERS(name, email)
VALUES('Selena', 'selenatest@gmail.com');


INSERT INTO Pets(user_id, name, age, photo, breed, size, personality, activity, gender)
VALUES(1, 'Remy', 4, 'remy.jpg', 'Terrier', 'small', 'playful', 'playing fetch', 'male');

INSERT INTO Pets(user_id, name, age, photo, breed, size, personality, activity, gender)
VALUES(2, 'Maeve', 1, 'maeve.jpg', 'Labrador', 'large', 'playful', 'playing fetch', 'female');

INSERT INTO Pets(user_id, name, age, photo, breed, size, personality, activity, gender)
VALUES(3, 'Eevee', 2, 'eevee.jpg', 'Chihuahua', 'small', 'playful', 'walking', 'female');

INSERT INTO Pets(user_id, name, age, photo, breed, size, personality, activity, gender)
VALUES(4, 'Koko', 7, 'koko.jpg', 'Chihuahua', 'small', 'quiet', 'sitting in your lap', 'female');

INSERT INTO Pets(user_id, name, age, photo, breed, size, personality, activity, gender)
VALUES(5, 'Pizza', 5, 'pizza.jpg', 'Husky', 'playful', 'hiking', 'male');

INSERT INTO Pets(user_id, name, age, photo, breed, size, personality, activity, gender)
VALUES(6, 'Rex', 10, 'rex.jpg', 'Golden Retriever', 'playful', 'playing fecth', 'male');

INSERT INTO Pets(user_id, name, age, photo, breed, size, personality, activity, gender)
VALUES(7, 'Snickers', 8, 'snickers.jpg', 'Chihuahua', 'small', 'quiet', 'sitting in your lap');



INSERT INTO Chats(user_one_id, user_two_id)
VALUES(1, 2);

INSERT INTO Chats(user_one_id, user_two_id)
VALUES(1, 3);




INSERT INTO Messages(chat_id, sender, timestamp, message)
VALUES(1, 'Kyle', '2022-05-05', 'Your dog is so cute!');

INSERT INTO Messages(chat_id, sender, timestamp, message)
VALUES(1, 'Kyle', '2022-05-05', 'Have you been to Franklin dog park?');


INSERT INTO Messages(chat_id, sender, timestamp, message)
VALUES(2, 'Kyle', '2022-05-05', 'Hi! Cute dog!');