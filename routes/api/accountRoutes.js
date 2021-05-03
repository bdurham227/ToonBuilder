const router = require('express').Router();
const { Account, User, Character } = require('../../models');

//get all accounts
router.get('/', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})

//get one account
router.get('/:id', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})


//create an account
router.post('/', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})

//update an account
router.put('/:id', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})

//delete an account
router.delete('/:id', async (req, res) => {
    try {} catch (err) {
        res.status(500).json(err);
    }
})