const { User } = require('../models');

const userData = [
    {
      username: "Ben", 
       email: "benjibutt@gmail.com",
       password: "password12",
      
    },
    {
      username: "Vito", 
        email: "vito@gmail.com",
        password: "password13",
       
     },
     {
       username: "Brie",
        email: "brittanybutt@gmail.com",
        password: "password14",
        
     },
     {
      username: "Patrick",
        email: "patrick@gmail.com",
        password: "password15",
       
     },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;