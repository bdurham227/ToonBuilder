//import Models 
const Account = require('./Account');
const User = require('./User');
const Character = require('./Character');

//set up assocations

User.hasMany(Account,{
    onDelete: 'cascade',
});
Account.belongsTo(User,{
    onDelete: 'cascade',
})

Character.belongsTo(Account,{
    foreignKey: 'account_id',
    onDelete: 'cascade',
});

Account.hasMany(Character,{
    foreignKey: 'account_id',
    onDelete: 'cascade',
});

User.belongsToMany(Account, {
    through: {
        model: Character,
    },
    foreignKey: 'user_id',
    onDelete: 'cascade',
});

Account.belongsToMany(User, {
    through: {
        model: Character,
    },
    foreignKey: 'account_id',
    onDelete: 'cascade',
});




// Character.belongsToMany(User, {
//     through: {
//         model: Account,
//     }
// });

// User.belongsToMany(Character, {
//     through: {
//         model: Account
//     }
// })

// Character.belongsToMany(User,{
//     through: {
//         model: Account,
//     },
//     foreignKey: 'character_id',
// });

//two

// Account.belongsTo(User, {
//     unique: false,
//     onDelete: 'cascade',
// });


//  User.hasMany(Account,{
//      unique: false,
//      onDelete: 'cascade',
//  });

//  Character.belongsToMany(User, {
//     through: {
//         model: Account,
//     },
//     foreignKey: 'character_id',
//  });

//  User.belongsToMany(Character, {
//      through: {
//          model: Account,
//      },
//      foreignKey: 'user_id',
//  });























// Character.belongsTo(Account, {
//     unqiue: false,
//     onDelete: 'cascade',
// });
// Account.hasMany(Character, {
//     unqiue: false,
//     onDelete: 'cascade',
// });

// Account.belongsToMany(User, {
//     through: {
//         model: Character,
//     },
//     foreignKey: 'user_id',
//     onDelete: 'cascade',
    
// });

// User.belongsToMany(Account, {
//     through: {
//         model: Character,
//     },
//     foreignKey: 'account_id',
//     onDelete: 'casacde',
    
// });



module.exports = {
    Account,
    User,
    Character,
};