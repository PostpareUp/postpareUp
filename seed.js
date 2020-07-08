const {db} = require('./server/db')
const {green, red} = require('chalk')

const User = require('./server/db/models/User');
const Reflection = require('./server/db/models/Reflection')
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

const reflections = [
  {
    userId: 1,
    companyName: "BBC",
    interviewStage: "technical interview",
  },
  {
    userId: 1,
    companyName: "bbc",
    interviewStage: "technical interview",
  },
  {
    userId: 2,
    companyName: "ada",
    interviewStage: "technical interview",
  },
  {
    userId: 3,
    companyName: "bzz",
    interviewStage: "technical interview",
  },
];

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(users.map(user => {
      return User.create(user);
    }));

    await Promise.all(
      reflections.map((reflection) => {
        return Reflection.create(reflection);
      })
    );

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
