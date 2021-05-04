const { User, Account } = require("../models");

exports.getAllUsers = async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: ["id", "username"],
      include: [
        {
          model: Account,
          attributes: ["id", "account_name", "user_id"],
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "username"],
      include: [
        {
          model: Account,
          attributes: ["id", "account_name", "user_id"],
        },
      ],
    });
    if (!userData) {
      res
        .status(404)
        .json({ message: `No User with the Id ${req.params.id} found!` });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res
        .status(404)
        .json({ message: `No User with the ID ${req.params.id} found!` });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res
        .status(404)
        .json({ message: `No User with the ID ${req.params.id} found!` });
      return;
    }
    res.status(204).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};
