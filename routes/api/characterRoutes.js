const router = require('express').Router();
const { Character, Account, User  } = require('../../models');

//get all characters
// router.get('/', async (req, res) => {
//     try {
//         const characterData = await Character.findAll({
//             attributes: ['id', 'character_name', 'character_class', 'character_level', 'user_id', 'account_id'],
//             include: [
//                 {
//                     model: User,
//                     attributes: ['id', 'username'],
//                 },
//                 {
//                     model: Account,
//                     attributes: ['id', 'account_name'],
//                 },
//             ],
//         });
//         res.status(200).json(characterData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

router.get('/', async (req, res) => {
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
})






//get one character
router.get('/:id', async (req, res) => {
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
})


//create a character
/

//update a character
// router.put('/:id', async (req, res) => {
//     try {
//         const characterData = await Character.update({
//             where: {
//                 id: req.params.id,
//             },
//         });
       



//         res.status(200).json(characterData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

//delete a character
router.delete('/:id', async (req, res) => {
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
});

module.exports = router;
