const router = require("express").Router();
// const userController = require('../../controllers/userController')
const {
  getAllUsers,
  getUser,
  renderUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

router
.get("/", getAllUsers)
.post("/", createUser)


router
.get("/:id", getUser)
.put("/:id", updateUser)
.delete("/:id", deleteUser);

// const getAllUsers = async (req, res) => {
//     try {
//     const userData = await User.findAll({
//         attributes: ['id', 'username'],
//         include: [
//             {
//                 model: Account,
//                 attributes: ['id', 'account_name', 'user_id'],
//             },
//         ],
//     });
//     res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// const getUser = async (req, res) => {
//     try {
//         const userData = await User.findOne({
//             where: {
//                 id: req.params.id,
//             },
//             attributes: ['id', 'username'],
//             include: [
//                 {
//                     model: Account,
//                     attributes: ['id', 'account_name', 'user_id'],
//                 },
//             ],
//         });
//         if(!userData) {
//             res.status(404).json({ message: `No User with the Id ${req.params.id} found!` });
//             return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// const createUser = async (req, res) => {
//     try {
//         const userData = await User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         });
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// const updateUser = async (req, res) => {
//     try {
//         const userData = await User.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (!userData[0]) {
//             res.status(404).json({ message: `No User with the ID ${req.params.id} found!` });
//             return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

// const deleteUser =  async (req, res) => {
//     try {
//         const userData = await User.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if(!userData) {
//             res.status(404).json({ message: `No User with the ID ${req.params.id} found!` });
//             return;
//         }
//         res.status(204).json(userData);

//     } catch (err) {
//         res.status(500).json(err);
//     }
// }

// router.get('/', async (req, res) => {
//     try {
//     const userData = await User.findAll({
//         attributes: ['id', 'username'],
//         include: [
//             {
//                 model: Account,
//                 attributes: ['id', 'account_name', 'user_id'],
//             },
//         ],
//     });
//     res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

//get one user
// router.get('/:id', async (req, res) => {
//     try {
//         const userData = await User.findOne({
//             where: {
//                 id: req.params.id,
//             },
//             attributes: ['id', 'username'],
//             include: [
//                 {
//                     model: Account,
//                     attributes: ['id', 'account_name', 'user_id'],
//                 },
//             ],
//         });
//         if(!userData) {
//             res.status(404).json({ message: `No User with the Id ${req.params.id} found!` });
//             return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

//create a user
// router.post('/', async (req, res) => {
//     try {
//         const userData = await User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         });
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

//update a user
// router.put('/:id', async (req, res) => {
//     try {
//         const userData = await User.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (!userData[0]) {
//             res.status(404).json({ message: `No User with the ID ${req.params.id} found!` });
//             return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// //delete a user
// router.delete('/:id', async (req, res) => {
//     try {
//         const userData = await User.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if(!userData) {
//             res.status(404).json({ message: `No User with the ID ${req.params.id} found!` });
//             return;
//         }
//         res.status(204).json(userData);

//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

module.exports = router;
