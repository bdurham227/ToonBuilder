const router = require('express').Router();
const userRoutes = require('./userRoutes');
const accountRoutes = require('./accountRoutes');
const characterRoutes = require('./characterRoutes');

router.use('/user', userRoutes);
router.use('/account', accountRoutes);
router.use('/character', characterRoutes);

module.exports = router;