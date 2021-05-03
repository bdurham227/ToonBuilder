const router = require('express').Router();
const { Character, Account, User  } = require('../../models');

//get all characters
router.get('/', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})

//get one character
router.get('/:id', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})


//create a character
router.post('/', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})

//update a character
router.put('/:id', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})

//delete a character
router.delete('/:id', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})
