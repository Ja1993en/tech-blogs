const { User } = require('../models');

const userData = [
    {
        username: "King_Author",
        twitter: "Kingb",
        github: "KingB",
        email: "King_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Jalen_b",
        twitter: "Jalenb",
        github: "Jalenb",
        email: "Jalen_@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Jonny_r",
        twitter: "Jonny_ram",
        github: "Jonny_ram",
        email: "shaun_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_n",
        twitter: "leenorris",
        github: "leenorris",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
   
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;