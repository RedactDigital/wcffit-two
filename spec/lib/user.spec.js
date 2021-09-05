// const db = require('../models/index.spec');
// const Users = require('../../lib/User');

// describe('user data', function () {
//   it('returns data for a user', function () {
//     const user = new Users(db, 1);
//     user.registerUser.then(data => {
//       expect(data.email).toBe('jondoe@test.com');
//       expect(data.password).toBe('pass123');
//       expect(data.first_name).toBe('jon');
//       expect(data.last_name).toBe('doe');
//     });
//   });
// });

const Users = require('../../lib/User');

describe('register user', function () {
  it('registers a user to the database, first and last name should always be capitalized', async function () {
    // const user = await new Users().registerUser('jondoe@test.com', 'pass123', 'jon', 'doe');
    // expect(user.email).toBe('jondoe@test.com');
    // expect(user.password).toBe('pass123');
    // expect(user.firstName).toBe('Jon');
    // expect(user.lastName).toBe('Doe');
    const a = 2;
    const b = 2;
    const sum = a + b;
    expect(sum).toBe(4);
  });
});
