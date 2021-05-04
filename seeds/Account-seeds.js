const { Account } = require("../models");

const accountData = [
  {
    account_name: "Nadal0227",
  },
  {
    account_name: "PrinceVito",
  },
  {
    account_name: "Brielaxin",
  },
  {
    account_name: "HufflePuff_Enthusiast",
  },
];

const seedAccount = () => Account.bulkCreate(accountData);

module.exports = seedAccount;
