const { db } = require('../db');

module.exports = {
  getAll: (userEmail, callback) => {
    const queryString = `
    SELECT *
    FROM Users
    WHERE email = '${userEmail}'`;

    db.query(queryString)
      .then(res => callback(null, res.rows[0]))
      .catch(err => callback(err));
  },
  createOne: (userDetails, petDetails, callback) => {
    const userInsert = `
    INSERT INTO Users(name, email)
    VALUES('${userDetails.userName}', '${userDetails.userEmail}')
    `;

    const petInsert = `
    INSERT INTO Pets(user_id, name, age, photo, breed, size, personality, activity)
    VALUES
      ((
        SELECT id FROM Users WHERE email = '${userDetails.userEmail}'
      ), '${petDetails.petName}', ${petDetails.petAge} , '${petDetails.petPhoto}',
      '${petDetails.petBreed}', '${petDetails.petSize}', '${petDetails.petPersonality}',
      '${petDetails.petActivity}')
    `;

    db.query(userInsert)
      .then(() => db.query(petInsert))
        .then(() => callback(null))
        .catch((err) => {
          console.log('Error inserting into db: ', err);
          callback(err);
        });
  },
}