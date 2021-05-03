const express = require('express');

//import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//sync sequelize models to the database and then turn on server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now Listeninng, we are running on port ${PORT}`));
})

