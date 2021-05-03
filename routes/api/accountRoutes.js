const router = require('express').Router();
const { Account, User, Character } = require('../../models');

//get all accounts
router.get('/', async (req, res) => {
    try {
        const accountData = await Account.findAll({
            attributes: ['id', 'account_name', 'user_id'],
            include: [
                {
                    model: Character,
                    attributes: ["id", "character_name", "character_class", "character_level", "user_id", "account_id"],
                },
            ],
        });
        res.status(200).json(accountData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//get one account
router.get('/:id', async (req, res) => {
    try {
    const accountData = await Account.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id', 'account_name', 'user_id'],
        include: [
            {
                model: Character,
                attributes:  ["id", "character_name", "character_class", "character_level", "user_id", "account_id"],
            },
        ],
    });
    if (!accountData) {
        res.status(404).json({ message: `No User with the Id ${req.params.id} found!` });
        return;
    }
    res.status(200).json(accountData);
    } catch (err) {
        res.status(500).json(err);
    }
})


//create an account
router.post('/', async (req, res) => {
    try {
        const accountData = await Account.create({
            account_name: req.body.account_name,
        });
        res.status(200).json(accountData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//update an account
// router.put('/:id', async (req, res) => {
//     try {
//         const accountData = awa
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

//delete an account
router.delete('/:id', async (req, res) => {
    try {
        const accountData = await Account.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!accountData) {
            res.status(404).json({ message: `No User with the Id ${req.params.id} found!` });
            return;
        }
        res.status(200).json(accountData);
    } catch (err) {
        res.status(500).json(err);
    }
})