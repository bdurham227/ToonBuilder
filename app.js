const express = require("express");
const routes = require("./routes");
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})

//import sequelize connection
const sequelize = require("./config/connection");

const app = express();
// const PORT = process.env.PORT || 3001;

// app.set("view engine", "hbs");
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./controllers/homepageController'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);




//sync sequelize models to the database and then turn on server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () =>
//     console.log(`Now Listeninng, we are running on port ${PORT}`)
//   );
// });

module.exports = app;


