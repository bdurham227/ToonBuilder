const app = require('./app');
//import sequelize connection
const sequelize = require("./config/connection");


const PORT = process.env.PORT || 3001;


//sync sequelize models to the database and then turn on server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now Listeninng, we are running on port ${PORT}`)
  );
});
