const {db} = require('./server/db')
const {green, red} = require('chalk')

const User = require('./server/db/models/User');

// here's some sample candies to get you started
// feel free to edit these or add your own!
const users = [{
  username: 'Rusty',
  email: 'rusty@gmail.com',
  password: '123',
  numbOfRejection: 2
},
{
  username: 'Adam',
  email: 'adam@gmail.com',
  password: '123',
  numbOfRejection: 5
},
{
  username: 'CrunchyBob',
  email: 'crunchybob@gmail.com',
  password: '123',
  numbOfRejection: 10
}
];

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(users.map(user => {
      return User.create(user);
    }));

    console.log(green('Seeding success!'))
    db.close()
  }
  catch (err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  }
}

seed();
