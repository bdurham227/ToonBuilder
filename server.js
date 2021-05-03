const express = require('express');
const routes = require('./routes');

//import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


//sync sequelize models to the database and then turn on server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now Listeninng, we are running on port ${PORT}`));
})

