const router = require('express').Router();
const { User, Account } = require('../../models');

//get all users
router.get('/', async (req, res) => {
    try {
    const userData = await User.findAll({
        attributes: ['id', 'username'],
        include: [
            {
                model: Account,
                attributes: ['id', 'account_name', 'user_id'],
            },
        ],
    });
    res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//get one user
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['id', 'username'],
            include: [
                {
                    model: Account,
                    attributes: ['id', 'account_name', 'user_id'],
                },
            ],
        });
        if(!userData) {
            res.status(404).json({ message: `No User with the Id ${req.params.id} found!` });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})


//create a user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//update a user
router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!userData[0]) {
            res.status(404).json({ message: `No User with the ID ${req.params.id} found!` });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//delete a user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!userData) {
            res.status(404).json({ message: `No User with the ID ${req.params.id} found!` });
            return;
        }
        res.status(204).json(userData);



    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;