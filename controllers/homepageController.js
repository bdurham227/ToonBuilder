const router = require('express').Router();
const { Character, Account } = require('../models');


// app.get('', (req, res) => {
//   res.render('index')
// })

//get all
// router.get('/', async (req, res) => {
//     try {
//         const characterData = await Character.findAll();
//         const characters = characterData.map((character) => character.get())
//         res.render('all', { characters })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })
router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll({
            attributes: [  "id",
            "character_name",
            "character_class",
            "character_level",
            "user_id",
            "account_id",],
            include: [
                {
                    model: Account,
                    attributes: ["account_name"],
                },
            ],
        });
        const characters = characterData.map((character) => character.get({ plain: true }));
        res.render('all', { characters })

    } catch (err) {
        res.status(500).json(err);
    }
})




router.get('/character/:id', async (req, res) => {
    try {
        const characterData = await Character.findOne({
            where: {
                id: req.params.id,
            },
        });
        const character = characterData.get({ plain: true });
        res.render('character', character);

    } catch (err) {
        res.status(500).json(err)
    }
})



  module.exports = router;