const { Character } = require('../models');


const characterData = [
    {
        character_name: "Runite",
        character_class: "Warrior",
        character_level: 60,
        user_id: 1,
        account_id: 1,
        
    },
    {
        character_name: "Alessandra",
        character_class: "Rogue",
        character_level: 60,
        user_id: 2,
        account_id: 2,
        
    },
    {
        character_name: "Socmrepres",
        character_class: "Priest",
        character_level: 60,
        user_id: 3,
        account_id: 3,
        
    },
    {
        character_name: "Pramsey",
        character_class: "Mage",
        character_level: 60,
        user_id: 4,
        account_id: 4,
        
    },
];

const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;