const { Character, Account, User  } = require('../models');

exports.getAllCharacters =  async (req, res) => {
    try {
        const characterData = await Character.findAll({
            attributes: ['id', 'character_name', 'character_level', 'user_id', 'account_id'],
           include: [
               {
                   model: Account,
                   attributes: ['id', 'account_name'],
               },
           ]
        })
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getCharacter = async (req, res) => {
    try {
        const characterData = await Character.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'character_name', 'character_class', 'character_level', 'user_id', 'account_id'],
            include: [
                // {
                //     model: User,
                //     attributes: ['id', 'username'],
                // },
                {
                    model: Account,
                    attributes: ["id", "account_name"],
                },
            ],
        });
        if (!characterData) {
            res.status(500).json({ message: `No Character with the ID ${req.params.id} found!` });
            return;
        }
        res.status(200).json(characterData);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.createCharacter = (req, res) => {
    try {
    Character.create(req.body)
    .then((character) => {
        console.log(character);
        if (req.body.account_id.length) {
            const characterAccountId = req.body.account_id.map((account_id) => {
                return {
                    account_id,
                };
            });
            return Character.bulkCreate(characterAccountId);
        }
        res.status(200).json(character);
    })


    } catch (err) {
        res.status(500).json(err)
    }
}

exports.deleteCharacter = async (req, res) => {
    try {
        const characterData = await Character.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!characterData) {
          res.status(404).json({ message: `No Character with the ID ${req.params.id} found!` });
          return;  
        }
        res.status(204).json(characterData);

    } catch (err) {
        res.status(500).json(err);
    }
}