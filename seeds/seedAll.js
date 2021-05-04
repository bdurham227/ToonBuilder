const seedUser = require("./User-seeds");
const seedAccount = require("./Account-seeds");
const seedCharacter = require("./Character-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n--------------DATABASE SYNCED-------------------\n");

  await seedUser();
  console.log("\n--------------USERS SYNCED-------------------\n");

  await seedAccount();
  console.log("\n--------------ACCOUNTS SYNCED-------------------\n");

  await seedCharacter();
  console.log("\n--------------CHARACTERS SYNCED-------------------\n");

  process.exit(0);
};

seedAll();
